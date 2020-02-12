const objoracle = require('oracledb');

const log4js = require('log4js');

const con = require('./conexion');

const dbConfig = require('./dbconfig');

const logger = log4js.getLogger();

logger.level = 'debug';


function select(sql) {
  let connection;
  let result;
  try {
    connection = objoracle.getConnection(dbConfig);
    result = connection.execute(sql);
    logger.debug(result.rows);
  } catch (err) {
    logger.error(err);
  } finally {
    if (con) {
      try {
        con.close();
      } catch (err) {
        logger.error(err);
      }
    }
  }
  return result;
}

module.exports.select = select;
