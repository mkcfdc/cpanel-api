import { removeIpSchema, addIpSchema } from '../schemas/post.ip.schema.js';

import { blockIpController, unblockIpController } from '../controllers/ip.controller.js';


async function ipRoutes(fastify, options) {

  fastify.post('/block', addIpSchema, blockIpController);
  fastify.delete('/unblock', removeIpSchema, unblockIpController);

}

export default ipRoutes;