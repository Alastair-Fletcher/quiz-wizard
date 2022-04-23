const Express = require('express');
const app = new Express();
const cors = require('cors');
const morgan = require('morgan');

const router = require('./router');
const PORT = 3001;
const mongoose = require('mongoose');

app.use(cors());
app.use(morgan('tiny'));
app.use(Express.json());
app.use(router);

(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/QuizWizard', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.connection.on('error', console.error);
    console.log('db connected');
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
