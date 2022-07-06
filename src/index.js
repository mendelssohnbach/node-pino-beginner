const express = require('express');
const logger = require('./logger');

const PORT = 3000;
const app = express();

app.get('/sample', (req, res) => {
  logger.level = 'trace';
  logger.info('Serving Hello Sample');
  logger.error('Serving Hello Sample');
  logger.warn('Serving Hello Sample');
  logger.fatal('Serving Hello Sample');
  logger.trace('Serving Hello Sample');
  logger.debug('Serving Hello Sample');
  res.status(200).send('Hello Sample');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
