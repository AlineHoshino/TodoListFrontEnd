const mongoose = require('mongoose');

const TodoDataSchema = new mongoose.Schema({
  title: String,
  task: String,
  priority: Boolean,
  status: String,
  date: String,
});

module.exports = mongoose.model('Annotations', TodoDataSchema);
