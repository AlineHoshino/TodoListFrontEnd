const express = require('express');
const rescue = require('express-rescue');
const todoController = require('../controllers/TaskController');
const PriorityController = require('../controllers/PriorityController');
const valideTask = require('../validations/validation');

const router = express.Router();

// Rota Todo
router.post('/todo', valideTask, rescue(todoController.create));
router.get('/todo', todoController.read);
router.delete('/todo/:id', todoController.deleteTask);

// Rota Priority
router.get('/priorities', PriorityController.read);
router.post('/priorities', PriorityController.update);
// Rota Teste
router.get('/api', (_req, res) => {
  res.status(200).send({ message: 'Bem vindo!' });
});

module.exports = router;
