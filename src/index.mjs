import app from './app.mjs';
import config from './config/env.config.js';

const start = async () => {
  try {
    await app.ready();

    app.listen({
      port: config.server.PORT,
      host: '0.0.0.0'
    });

    app.log.info(`Server listening on http://localhost:${config.server.PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal, async () => {
    app.log.info(`Received ${signal}, shutting down...`);
    try {
      await app.close();
      app.log.info('Server closed');
      process.exit(0);
    } catch (err) {
      app.log.error('Error during shutdown', err);
      process.exit(1);
    }
  });
});

start();