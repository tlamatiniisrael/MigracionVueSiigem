const logger = require('log4js');

logger.configure({
  appenders: { dependencias: { type: 'file', filename: 'dependencias.log' } },
  categories: { default: { appenders: ['dependencias'], level: 'all' } },
});

const LOG = logger.getLogger('dependencias');

module.exports = LOG;
