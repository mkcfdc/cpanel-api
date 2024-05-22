import { createEmailAccount, deleteEmailAccount, listEmailAccountsWDisk } from '../services/uapi/cpanel/modules/email.js';

export const createEmailController = async (request, reply) => {
    try {
      const { email, password, domain, quota } = request.body;
      const result = await createEmailAccount(email, password, domain, quota);
      return reply.send(result);
    } catch (error) {
      request.log.error(error);
      return reply.status(500).send({ error: 'An error occurred while creating the email account' });
    }
  }

  export const deleteEmailController = async (request, reply) => {
    try {
      const { email, domain } = request.body;
      const result = await deleteEmailAccount(email, domain);
      return reply.send(result);
    } catch (error) {
      request.log.error(error);
      return reply.status(500).send({ error: 'An error occurred while deleting the email account' });
    }
  }

  export const getEmailListWDiskController = async (request, reply) => {
    try {
      const { user, domain } = request.query;
      request.log.info(request.query)

      let result;
      if(!user && !domain) result = await listEmailAccountsWDisk();
      result = await listEmailAccountsWDisk(user, domain);
      
      return reply.send(result);
    } catch (error) {
      request.log.error(error);
      return reply.status(500).send({ error: 'An error occurred while retreiving account info' });
    }
  }