// addPopSchema.js
import { default400 } from './DEFAULT.400.schema.js';

const addPopRequestSchema = {
  type: 'object',
  properties: {
    email: { type: 'string' },
    password: { type: 'string' },
    domain: { type: 'string' },
    quota: { type: 'integer' }
  },
  required: ['email', 'password', 'domain']
};

const addPopResponseSchema = {
  type: 'object',
  properties: {
    status: { type: 'integer' },
    metadata: { type: 'object' },
    messages: { type: 'array', items: { type: 'string' } },
    errors: { type: 'array', items: { type: 'string' } }
  },
  required: ['status', 'metadata', 'messages', 'errors']
};

export const addPopSchema = {
  schema: {
    description: 'Create an email account within cPanel and send welcome email to new user.',
    summary: 'Create a new email account.',
    tags: ['email'],
    body: addPopRequestSchema,
    response: {
      200: addPopResponseSchema,
      400: default400
    }
  }
};

export const deletePopSchema = {
  schema: {
    description: 'Delete a POP account in cPanel',
    tags: ['email'],
    summary: 'Delete POP account',
    body: {
      type: 'object',
      required: ['email', 'domain'],
      properties: {
        email: { type: 'string', description: 'The email address of the POP account to delete' },
        domain: { type: 'string', description: 'The domain of the email account' }
      }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'string' },
          data: { type: 'object', properties: {} }
        }
      },
      400: default400
    }
  }
};

export const listPopsWithDiskSchema = {
  schema: {
    description: 'List all POP accounts with their disk usage in cPanel',
    tags: ['email'],
    summary: 'List POP accounts with disk usage',
    querystring: {
      type: 'object',
      properties: {
        user: { type: 'string', description: 'username of the account' },
        domain: { type: 'string', description: 'domain name of account' },
      }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'string' },
          data: {
            type: 'array',
            items: {
              //type: 'object',
              // properties: {
              //   email: { type: 'string', description: 'Email address of the POP account' },
              //   domain: { type: 'string', description: 'Domain of the email account' },
              //   diskused: { type: 'string', description: 'Disk usage of the POP account' },
              //   diskquota: { type: 'string', description: 'Disk quota of the POP account' }
              // }
            }
          }
        }
      },
      400: default400,
    }
  }
};