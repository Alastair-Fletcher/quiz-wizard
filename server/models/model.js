const mongoose = require('mongoose');

const Option = new mongoose.Schema({
  answer: String,
  correctAnswer: Boolean,
});

const QuestionSchema = new mongoose.Schema({
  category: String,
  question: String,
  a: Option,
  b: Option,
  c: Option,
  d: Option,
});

module.exports = mongoose.model('Question', QuestionSchema);
