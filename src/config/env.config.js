import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const config = {
  server: {
    PORT: process.env.PORT || 3000,
    ENVIRO: process.env.ENVIRO || 'development',
  },
  auth0: {
    domain: process.env.AUTH0_DOMAIN,
    audience: process.env.AUTH0_AUDIENCE,
    secret: process.env.AUTH0_SECRET,
  },
  cpanel: {
    CPANEL_HOST: process.env.CPANEL_HOST,
    CPANEL_USERNAME: process.env.CPANEL_USERNAME,
    CPANEL_API_TOKEN: process.env.CPANEL_API_TOKEN,
  },
  EMAIL_ACCOUNT: process.env.EMAIL_ACCOUNT,
};

export default config;