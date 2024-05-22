import config from './env.config.js';

export const auth0Config = {
    domain: config.auth0.domain,
    audience: config.auth0.audience,
    secret: config.auth0.secret,
  };