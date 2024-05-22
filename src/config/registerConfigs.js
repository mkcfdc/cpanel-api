import helmet from '@fastify/helmet';
import cors from '@fastify/cors';
import compress from '@fastify/compress';
import rateLimit from '@fastify/rate-limit';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fastifyAuth0Verify from 'fastify-auth0-verify';

import { swaggerOptions, swaggerUiOptions } from './swagger.config.js';
import rateLimitConfig from './ratelimit.config.js';
import { auth0Config } from './auth0.config.js';


const registerConfig = async (app) => {

    app.register(helmet);
    app.register(cors);
    app.register(compress);

    app.register(fastifySwagger, swaggerOptions);
    app.register(fastifySwaggerUi, swaggerUiOptions);

    await app.register(rateLimit, rateLimitConfig);
    app.register(fastifyAuth0Verify, auth0Config);

}
export default registerConfig;