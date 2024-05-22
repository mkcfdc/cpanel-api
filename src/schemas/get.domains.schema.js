import { default400 } from "./DEFAULT.400.schema.js";

const sucessSchema = {
  type: 'object',
  properties: {
    metadata: { type: 'object' },
    status: { type: 'integer' },
    messages: { type: ['string', 'null'] },
    warnings: { type: ['string', 'null'] },
    data: {
      type: 'object',
      properties: {
        addon_domains: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'string' },
              documentroot: { type: 'string' },
              serveradmin: { type: 'string' },
              phpversion: { type: 'string' },
              group: { type: 'string' },
              domain: { type: 'string' },
              phpopenbasedirprotect: { type: 'integer' },
              ip: { type: 'string' },
              usecanonicalname: { type: 'string' },
              owner: { type: 'string' },
              servername: { type: 'string' },
              hascgi: { type: 'string' },
              no_cache_update: { type: 'integer' },
              userdirprotect: { type: 'string' },
              homedir: { type: 'string' },
              type: { type: 'string' },
              user: { type: 'string' },
              serveralias: { type: 'string' },
              ipv6: { type: ['string', 'null'] }
            },
            required: ['status', 'documentroot', 'serveradmin', 'phpversion', 'group', 'domain', 'phpopenbasedirprotect', 'ip', 'usecanonicalname', 'owner', 'servername', 'hascgi', 'no_cache_update', 'userdirprotect', 'homedir', 'type', 'user', 'serveralias']
          }
        },
        main_domain: {
          type: 'object',
          properties: {
            customlog: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  target: { type: 'string' },
                  format: { type: 'string' }
                },
                required: ['target', 'format']
              }
            },
            hascgi: { type: 'integer' },
            servername: { type: 'string' },
            scriptalias: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  path: { type: 'string' },
                  url: { type: 'string' }
                },
                required: ['path', 'url']
              }
            },
            owner: { type: 'string' },
            phpopenbasedirprotect: { type: 'integer' },
            domain: { type: 'string' },
            ssl_redirect: { type: 'integer' },
            usecanonicalname: { type: 'string' },
            ip: { type: 'string' },
            documentroot: { type: 'string' },
            phpversion: { type: 'string' },
            group: { type: 'string' },
            serveradmin: { type: 'string' },
            status: { type: 'string' },
            port: { type: 'string' },
            user: { type: 'string' },
            serveralias: { type: 'string' },
            type: { type: 'string' },
            homedir: { type: 'string' }
          },
          required: ['customlog', 'hascgi', 'servername', 'scriptalias', 'owner', 'phpopenbasedirprotect', 'domain', 'ssl_redirect', 'usecanonicalname', 'ip', 'documentroot', 'phpversion', 'group', 'serveradmin', 'status', 'port', 'user', 'serveralias', 'type', 'homedir']
        },
        sub_domains: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              ipv6: { type: ['string', 'null'] },
              type: { type: 'string' },
              homedir: { type: 'string' },
              userdirprotect: { type: 'string' },
              serveralias: { type: 'string' },
              user: { type: 'string' },
              owner: { type: 'string' },
              no_cache_update: { type: 'integer' },
              hascgi: { type: 'string' },
              servername: { type: 'string' },
              documentroot: { type: 'string' },
              group: { type: 'string' },
              phpversion: { type: 'string' },
              serveradmin: { type: 'string' },
              status: { type: 'string' },
              usecanonicalname: { type: 'string' },
              ip: { type: 'string' },
              domain: { type: 'string' },
              phpopenbasedirprotect: { type: 'integer' }
            },
            required: ['type', 'homedir', 'userdirprotect', 'serveralias', 'user', 'owner', 'no_cache_update', 'hascgi', 'servername', 'documentroot', 'group', 'phpversion', 'serveradmin', 'status', 'usecanonicalname', 'ip', 'domain', 'phpopenbasedirprotect']
          }
        },
        parked_domains: { type: 'array' }
      },
      required: ['addon_domains', 'main_domain', 'sub_domains', 'parked_domains']
    },
    errors: { type: ['string', 'null'] }
  },
  required: ['metadata', 'status', 'messages', 'warnings', 'data', 'errors']
};

export const getDomainsSchema = {
  schema: {
    description: 'Get domain information from cPanel',
    summary: 'Get domain account information',
    tags: ['domain'],
    response: {
      200: sucessSchema,
      400: default400
    },
  },
};