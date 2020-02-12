/* eslint-disable no-async-promise-executor */
// myscript.js
// This example uses Node 8's async/await syntax.

const oracledb = require('oracledb');

const log4js = require('log4js');

const logger = log4js.getLogger();

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
// oracledb.outFormat = oracledb.OUT_FORMAT_ARRAY;
logger.level = 'debug';

const mypw = 'ctrlservicios';// set mypw to the hr schema password


function getCatalogo() {
  return new Promise((async (resolve, reject) => {
    let connection;

    try {
      connection = await oracledb.getConnection({
        user: 'ctrlservicios',
        password: mypw,
        connectString: '192.151.112.178/desarrollo16',
      });

      const result = await connection.execute('SELECT * FROM IC_DEPENDENCIAS');
      logger.debug(result.rows);
      resolve(result.rows);
    } catch (err) {
      reject(err);
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          logger.error(err);
        }
      }
    }
  }));
}

module.exports.getCatalogo = getCatalogo;
