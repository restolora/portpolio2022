import React from 'react';
import Wrapper from '../components/wrapper';

import '../styles/globals.css';
import 'antd/dist/antd.css';

import nextConfig from 'next/config';
import { initialize } from '../sdk';
const { publicRuntimeConfig } = nextConfig();
const { CUSTOM_ENV: environment } = publicRuntimeConfig;

function MyApp({ Component, pageProps }) {
	// const { token } = pageProps
	const token = 'mytoken';
	initialize({ environment, token });

	return (
		<>
			<Wrapper>
				<Component {...pageProps} token={token} />
			</Wrapper>
		</>
	);
}

export default MyApp;
