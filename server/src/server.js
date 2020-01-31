const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const corsMiddlware = require('cors');
const router = require('./router');

app
  .use(corsMiddlware())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use('/', router);

module.exports = app;
