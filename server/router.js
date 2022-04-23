const Express = require('express');
const router = Express.Router();
const QuestionsController = require('./controllers/controller');

router.post('/questions', QuestionsController.postQuestion);
router.get('/questions', QuestionsController.getQuestions);
module.exports = router;
