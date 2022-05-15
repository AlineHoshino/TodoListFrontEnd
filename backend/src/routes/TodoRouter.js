const express = require('express');
const rescue = require('express-rescue');
const todoController = require('../controllers/TaskController');

const router = express.Router();

router.post('/todo', rescue(todoController));
router.get('/api', (_req, res) => {
  res.status(200).send({ message: 'Bem vindo!' });
});

module.exports = router;
