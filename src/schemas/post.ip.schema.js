import { default400 } from "./DEFAULT.400.schema.js";

export const addIpSchema = {
    schema: {
        description: 'Add an IP address to the cPanel IP block list',
        tags: ['IP'],
        summary: 'Add IP to block list',
        body: {
            type: 'object',
            required: ['ip'],
            properties: {
                ip: { type: 'string', description: 'The IP address to add' }
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    status: { type: 'string' },
                    data: { type: 'object' }
                }
            },
            400: default400
        }
    }
};

export const removeIpSchema = {
    schema: {
        description: 'Remove an IP address from the cPanel IP block list',
        tags: ['IP'],
        summary: 'Remove IP from block list',
        body: {
            type: 'object',
            required: ['ip'],
            properties: {
                ip: { type: 'string', description: 'The IP address to remove' }
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    status: { type: 'string' },
                    data: { type: 'object' }
                }
            },
            400: default400
        }
    }
};

