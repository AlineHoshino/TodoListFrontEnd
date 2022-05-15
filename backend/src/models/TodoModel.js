const mongoose = require('mongoose');

const TodoDataSchema = new mongoose.Schema({
  title: String,
  task: String,
  priority: Boolean,
});

module.exports = mongoose.model('Annotations', TodoDataSchema);
