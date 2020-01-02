const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const corsMiddlware = require('cors');

app
  .use(corsMiddlware())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use('/', router);

module.exports = app;
