const environment = process.env.NODE_ENV !== 'production'

export const server = environment ? 'http://localhost:3000' : 'https://yourwebsite.com';
