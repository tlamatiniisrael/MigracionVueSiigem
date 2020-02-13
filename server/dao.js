const objoracle = require('oracledb');
const LOG = require('./log');

objoracle.outFormat = objoracle.OUT_FORMAT_OBJECT;

const cns = {
  user: 'ctrlservicios',
  password: 'ctrlservicios',
  connectString: '192.151.112.178:1521/desarrollo16',
};

function close(cn) {
  cn.release(
    (err) => {
      if (err) { LOG.error(err.message); }
    },
  );
}

function error(err, rs, cn) {
  if (err) {
    LOG.error(err.message);
    rs.contentType('application/json').status(500);
    rs.send(JSON.stringify(err.message));
    if (cn != null) close(cn);
    return -1;
  }
  return 0;
}

function open(sql, binds, dml, rs) {
  objoracle.getConnection(cns, (err, cn) => {
    if (error(err, rs, null) === -1) return;
    cn.execute(sql, binds, { autoCommit: dml }, (err1, result) => {
      if (error(err1, rs, cn) === -1) return;
      rs.contentType('application/json').status(200);
      if (dml) rs.send(JSON.stringify(result.rowsAffected));
      else {
        // LOG.debug(result.sql);
        LOG.debug(result.metaData);
        rs.send(JSON.stringify(result.rows));
      }
      close(cn);
    });
  });
}

exports.open = open;
exports.close = close;
