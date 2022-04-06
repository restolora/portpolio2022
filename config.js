exports.environment = process.env.NODE_ENV;

exports.apiUrl = {
	// development: 'http://localhost:8080/',
	development: 'https://rnetworkapi.herokuapp.com/',
	sandbox: 'https://rnetworkapi.herokuapp.com/',
	staging: 'https://rnetworkapi.herokuapp.com/',
	production: 'https://rnetworkapi.herokuapp.com/'
};

exports.cookieConfig = { sameSite: 'lax' };
exports.cookieConfigServer = { httpOnly: true, sameSite: 'lax' };
