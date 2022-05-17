const Todo = require('../models/TodoModel');

const update = async (request, response) => {
  const { id } = request.params;
  const { task } = request.body;
  await Todo.updateOne(
    { _id: id },
    { $set: { task } },
  );
  const textUpdate = await Todo.findOne({ _id: id });
  return response.status(200).json(textUpdate);
};

module.exports = {
  update,
};
