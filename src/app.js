const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

require('dotenv').config();

const app = express();
const middlewares = require('./middleware/middlewares');
const v1 = require('./api/v1/index');

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'It\'s working!',
  });
});

app.use('/api/v1', v1);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
