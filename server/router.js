const Express = require('express');
const router = Express.Router();
const QuestionsController = require('./controllers/controller');

router.get('/questions', QuestionsController.getQuestions);
router.post('/questions', QuestionsController.postQuestion);

module.exports = router;
