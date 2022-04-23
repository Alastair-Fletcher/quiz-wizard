import './App.scss';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import PlayQuiz from './components/PlayQuiz';
import CreateQuiz from './components/CreateQuiz';
import { getQuestions } from './apiServices';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions().then((questions) => setQuestions(questions));
  }, []);

  return (
    questions.length && (
      <Router>
        <>
          <h1>Quiz</h1>
          <Navbar />
          <Routes>
            <Route
              path="/play"
              element={<PlayQuiz questions={questions} />}
            ></Route>
            <Route path="/create" element={<CreateQuiz />}></Route>
          </Routes>
        </>
      </Router>
    )
  );
}

export default App;
