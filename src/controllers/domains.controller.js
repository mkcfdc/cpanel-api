import { getDomains } from '../services/uapi/cpanel/modules/domains.js';

export const getDomainsController = async (request, reply) => {
    try {
      const domains = await getDomains();
      return reply.send(domains);
    } catch (error) {
      request.log.error(error);
      return reply.status(500).send({ error: 'An error occurred while fetching domains' });
    }
  }