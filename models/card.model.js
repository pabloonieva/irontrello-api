const mongoose = require('mongoose');
const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  due_date: String,
  position: Number,
  list: {
    type: String,
    enum: ['ToDo', 'WorkInProgress', 'Done'],
    default: 'ToDo'
  }
});

module.exports = mongoose.model('Card', cardSchema);
