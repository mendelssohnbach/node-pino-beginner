const pino = require('pino');

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'SYS:yyyy-mm-dd HH:MM:ss TT',
      ignore: 'pid,hostname',
    },
  },
});

module.exports = logger;
