import fastify from 'fastify';

import config from './config/env.config.js';
import envToLogger from './config/logging.config.js';

import registerConfig from './config/registerConfigs.js';
import registerRoutes from './routes/registerRoutes.js';

const environment = config.server.ENVIRO;

const app = fastify({
  logger: envToLogger[environment] ?? true
});

await registerConfig(app);
await registerRoutes(app);

export default app;