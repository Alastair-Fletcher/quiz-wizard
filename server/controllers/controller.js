const Question = require('../models/model');

class QuestionsController {
  async getQuestions(req, res) {
    try {
      res.status(201);
      res.send(await Question.find());
    } catch (error) {
      res.status(400);
      console.log(error);
    }
  }

  async postQuestion(req, res) {
    try {
      const { category, question, a, b, c, d } = req.body;

      const questionToAdd = await Question.create({
        category,
        question,
        a,
        b,
        c,
        d,
      });
      res.status(201);
      res.send(questionToAdd);
    } catch (error) {
      res.status(400);
      console.log(error);
    }
  }
}

module.exports = new QuestionsController();
