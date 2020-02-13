/* eslint-disable no-case-declarations */
/* eslint-disable radix */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const express = require('express');
const LOG = require('./log');
const dao = require('./dao');

const api = express.Router();


api.get('/dependencias', (request, response) => {
  const opc = parseInt(request.query.opc);
  const clv = parseInt(request.query.id);
  switch (opc) {
    case 1:
      sql = 'SELECT * FROM IC_DEPENDENCIAS  ORDER BY DESCRIPCION';
      LOG.debug(`consulta ${opc} ${sql}`);
      dao.open(sql, [], false, response);
      break;
    case 2:
      sql = 'SELECT * FROM IC_DEPENDENCIAS WHERE CLAVEDEPENDENCIA=:clv';
      LOG.debug(`consulta ${opc} ${sql} id ${clv}`);
      dao.open(sql, [clv], false, response);
      break;
    default:
      // response.contentType('application/json').status(200);
      // response.send(JSON.stringify('Opción no valida.'));
      sql = 'SELECT * FROM IC_DEPENDENCIAS  ORDER BY DESCRIPCION';
      LOG.debug(`consulta default ${sql}`);
      dao.open(sql, [], false, response);
  }
  response.end;
});

module.exports = api;
