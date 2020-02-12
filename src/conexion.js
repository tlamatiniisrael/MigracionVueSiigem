/*
const oracledb = require('oracledb');

const log4js = require('log4js');

const logger = log4js.getLogger();

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
// oracledb.outFormat = oracledb.OUT_FORMAT_ARRAY;
logger.level = 'debug';

const mypw = 'ctrlservicios';// set mypw to the hr schema password

let connection;

logger.debug('Some debug messages');
try {
  connection = oracledb.getConnection({
    user: 'ctrlservicios',
    password: mypw,
    connectString: '192.151.112.178/desarrollo16',
  });
} catch (err) {
  logger.error(err);
}
// eslint-disable-next-line import/prefer-default-export
export { connection as Connection };
*/
