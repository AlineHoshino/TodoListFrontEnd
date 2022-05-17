const Todo = require('../models/TodoModel');

const read = async (request, response) => {
  const priority = request.query;
  const priorityTask = await Todo.find(priority);
  return response.status(200).json(priorityTask);
};

const update = async (request, response) => {
  const { id } = request.params;
  const task = await Todo.findOne({ _id: id });
  if (task.priority) {
    task.priority = false;
  } else {
    task.priority = true;
  }
  await task.save();
  return response.status(200).json(task);
};

module.exports = {
  read,
  update,
};
