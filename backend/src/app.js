const express = require('express');
const cors = require('cors');
require('./config/db.config');
const todoRouter = require('./routes/TodoRouter');

const app = express();

app.use(cors());
app.use(express.json());// equivalente ao body-parser
app.use(todoRouter);

module.exports = app;
