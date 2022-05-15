const Todo = require('../models/TodoModel');

const create = async (request, response) => {
  const { title, task, priority } = request.body;
  const taskCreated = await Todo.create({
    title,
    task,
    priority,
  });
  return response.status(201).json(taskCreated);
};

module.exports = { create };
