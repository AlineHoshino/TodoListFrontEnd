const Todo = require('../models/TodoModel');

const todoCreate = async ({ description, status }) => {
  const task = await Todo.create({ description, status });
  console.log(Todo);
  return task;
};

module.exports = { todoCreate };
