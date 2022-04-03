import cookies from 'js-cookie';
import { cookieConfig } from '../config';

import CREATE from './components/CREATE';
import GET from './components/GET';
import ENV from './environment';
const login = '';

export const initialize = ({ apiKey = 'myApiKey', environment = ENV.PRODUCTION, tempToken = null, token = null }) => {
	cookies.set('apiKey', apiKey, cookieConfig);
	cookies.set('environment', environment, cookieConfig);
	if (tempToken) cookies.set('tempToken', tempToken, cookieConfig);
	if (token) cookies.set('token', token, cookieConfig);
};

export const auth = {
	login: login
};

export const database = {
	create: ({ entity, environment, token, url } = {}) => new CREATE(entity, token, environment, url),
	get: ({ entity, environment, token, post, url } = {}) => new GET(entity, token, environment, post, url)
	// delete: ({ entity, environment, id, token, url } = {}) => new DELETE(entity, id, token, environment, url),
	// deleteMany: ({ entity, environment, token, url } = {}) => new DELETEMANY(entity, token, environment, url),

	// getMany: ({ entities, environment, token, post, url } = {}) => new GETMANY(entities, token, environment, post, url),
	// update: ({ entity, environment, id, token, url } = {}) => new UPDATE(entity, id, token, environment, url)
	// updateMany: ({ entity, environment, token, url } = {}) => new UPDATEMANY(entity, token, environment, url)
};
