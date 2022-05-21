import './App.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PlayQuiz from './components/PlayQuiz';
import CreateQuiz from './components/CreateQuiz';
import { getQuestions } from './apiServices';

function App() {
  const [questions, setQuestions] = useState([]);
  const [fetchQuestions, setFetchQuestions] = useState(false);

  useEffect(() => {
    getQuestions().then((questions) => setQuestions(questions));
  }, [fetchQuestions]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PlayQuiz
              questions={questions}
              setFetchQuestions={setFetchQuestions}
            />
          }
        />
        <Route
          path="/create"
          element={<CreateQuiz setFetchQuestions={setFetchQuestions} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
