const Todo = require('../models/TodoModel');

const update = async (request, response) => {
  const { id } = request.params;
  const { task } = request.body;
  const textUpdate = await Todo.findOne({ _id: id });
  if (task) {
    textUpdate.task = task;
  }
  await textUpdate.save();
  return response.status(200).json(textUpdate);
};

module.exports = {
  update,
};
