import './App.scss';

import React, { useEffect, useState } from 'react';
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
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<PlayQuiz questions={questions} />} />
          <Route path="/create" element={<CreateQuiz />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
