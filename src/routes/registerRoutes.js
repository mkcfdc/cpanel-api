import domainRoutes from './domain.routes.mjs';
import ipRoutes from './ip.routes.mjs';
import emailRoutes from './email.routes.mjs';

const registerRoutes = async (app) => {

    app.register(domainRoutes, { prefix: '/api/domain' });
    app.register(emailRoutes, { prefix: '/api/email' });
    app.register(ipRoutes, { prefix: '/api/ip' });

}
export default registerRoutes;