import { blockIp, unblockIp } from '../services/uapi/cpanel/modules/ip.js';

export const blockIpController = async (request, reply) => {
    try {
        const { ip } = request.body;
        const result = await blockIp(ip);
        return reply.send(result);
    } catch (error) {
        request.log.error(error);
        return reply.status(500).send({ error: 'An error occurred while blocking ip.' });
    }
}

export const unblockIpController = async (request, reply) => {
    try {
        const { ip } = request.body;
        const result = await unblockIp(ip);
        return reply.send(result);
    } catch (error) {
        request.log.error(error);
        return reply.status(500).send({ error: 'An error occurred while blocking ip.' });
    }
}