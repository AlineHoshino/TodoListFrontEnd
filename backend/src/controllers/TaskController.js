const todoService = require('../services/TodoService');

const todoController = async (req, res) => {
  const { description, status } = req.body;
  const task = await todoService.todoCreate({ description, status });
  return res.status(201).json(task);
};

module.exports = todoController;
