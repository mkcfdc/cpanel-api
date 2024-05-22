import { getDomainsSchema } from '../schemas/get.domains.schema.js';

import { getDomainsController } from '../controllers/domains.controller.js';


async function domainRoutes(fastify, options) {

  fastify.get('/list', getDomainsSchema, getDomainsController);

}

export default domainRoutes;