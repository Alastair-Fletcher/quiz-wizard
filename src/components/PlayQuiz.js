import React, { useState } from 'react';
import SelectCategory from './SelectCategory';
import Questions from './Questions';

function PlayQuiz({ questions, setFetchQuestions }) {
  const [category, setCategory] = useState('');
  console.log(category);
  return (
    <>
      <SelectCategory questions={questions} setCategory={setCategory} />
      <Questions
        questions={questions}
        category={category}
        setFetchQuestions={setFetchQuestions}
      />
    </>
  );
}

export default PlayQuiz;
