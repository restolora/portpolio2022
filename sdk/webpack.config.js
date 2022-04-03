const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

const generalConfig = {
	mode: 'production',
	context: __dirname,
	devtool: false,
	entry: {
		index: ['core-js/stable', 'regenerator-runtime/runtime', './src/index.js']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['@babel/react', '@babel/env', '@babel/flow'],
					plugins: [
						'react-html-attrs',
						['@babel/proposal-decorators', { legacy: true }],
						'@babel/proposal-class-properties',
						'@babel/plugin-proposal-export-default-from'
					]
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new CompressionPlugin({
			filename: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.7
		})
	],
	externals: {
		axios: 'axios',
		'form-data': 'form-data',
		'jquery-param': 'jquery-param'
	}
};

const clientConfig = {
	...generalConfig,
	target: 'web',
	output: {
		path: `${__dirname}/dist/`,
		filename: '[name].min.js',
		libraryTarget: 'commonjs2'
	}
};

const serverConfig = {
	...generalConfig,
	target: 'node',
	externals: [
		{
			axios: {
				root: 'axios',
				commonjs2: 'axios',
				commonjs: 'axios',
				amd: 'axios',
				umd: 'axios'
			}
		}
	],
	output: {
		path: `${__dirname}/server/dist/`,
		filename: '[name].min.js',
		libraryTarget: 'commonjs2'
	}
};

module.exports = [serverConfig, clientConfig];
