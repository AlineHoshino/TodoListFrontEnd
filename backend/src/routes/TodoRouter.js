const express = require('express');
const rescue = require('express-rescue');
const todoController = require('../controllers/TaskController');
const valideTask = require('../validations/validation');

const router = express.Router();

router.post('/todo', valideTask, rescue(todoController.create));
router.get('/api', (_req, res) => {
  res.status(200).send({ message: 'Bem vindo!' });
});

module.exports = router;
