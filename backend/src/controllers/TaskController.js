const Todo = require('../models/TodoModel');

const read = async (request, response) => {
  const listTodo = await Todo.find();
  return response.status(200).json(listTodo);
};

const create = async (request, response) => {
  const { title, task, priority } = request.body;
  const taskCreated = await Todo.create({
    title,
    task,
    priority,
  });
  return response.status(201).json(taskCreated);
};

const deleteTask = async (request, response) => {
  const { id } = request.params;
  const deletedTask = await Todo.findByIdAndDelete({ _id: id });
  if (deletedTask) {
    return response.status(200).json(deletedTask);
  }
  return response.status(401).json({ error: 'This task was not found to delete' });
};

module.exports = {
  create,
  read,
  deleteTask,
};
