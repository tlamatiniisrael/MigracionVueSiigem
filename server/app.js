/* eslint-disable radix */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
const methodOverride = require('method-override');
const volleyball = require('volleyball');
const helmet = require('helmet');

const apiDependencias = require('./dependenciasRouter');

const app = express();

app.use(cors());
app.use(helmet());
app.use(volleyball);
// app.use(morgan('short'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(apiDependencias);

app.listen(3000, () => {
  console.log('Servidor listo - 3000');
});
