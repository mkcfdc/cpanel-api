import { addPopSchema, deletePopSchema, listPopsWithDiskSchema } from '../schemas/post.email.schema.js';

import { createEmailController, deleteEmailController, getEmailListWDiskController } from '../controllers/email.controller.js';


async function emailRoutes(fastify, options) {


  fastify.post('/add', addPopSchema, createEmailController);
  fastify.delete('/delete', deletePopSchema, deleteEmailController);
  fastify.get('/list', listPopsWithDiskSchema, getEmailListWDiskController);

}

export default emailRoutes;