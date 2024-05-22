const swaggerOptions = {
    routePrefix: '/documentation',
    swagger: {
      info: {
        title: 'API Documentation',
        description: 'API documentation for our project',
        version: '1.0.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: 'localhost:3000',
      schemes: ['https'],
      consumes: ['application/json'],
      produces: ['application/json']
    },
    exposeRoute: true
  };
  
  const swaggerUiOptions = {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false
    },
    uiHooks: {
      onRequest: (request, reply, next) => { next(); },
      preHandler: (request, reply, next) => { next(); }
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    exposeRoute: true
  };
  
  export { swaggerOptions, swaggerUiOptions };
  