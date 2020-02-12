/* eslint-disable radix */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const methodOverride = require('method-override');

const dao = require('./dao');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

const router = express.Router();

router.get('/dependencias', (request, response) => {
  const opc = parseInt(request.query.opc);
  switch (opc) {
    case 1:
      sql = 'SELECT * FROM IC_DEPENDENCIAS  ORDER BY DESCRIPCION';
      dao.open(sql, [], false, response);
      break;
    default:
      response.contentType('application/json').status(200);
      response.send(JSON.stringify('Opción no valida.'));
  }
  response.end;
});

app.use(router);

app.listen(3000, () => {
  console.log('Servidor listo - 3000');
});
