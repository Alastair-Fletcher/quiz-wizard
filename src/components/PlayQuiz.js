import React, { useState, useEffect } from 'react';
import SelectCategory from './SelectCategory';
import Question from './Question';

function PlayQuiz(props) {
  const [category, setCategory] = useState('');
  const [filteredQuestions, setfilteredQuestions] = useState(props.questions);

  //filter Qs according to category
  useEffect(() => {
    setfilteredQuestions(
      props.questions.filter((question) => {
        return question.category === category;
      })
    );
  }, [category]);

  return (
    <>
      <h1>cnjocdnjodsn</h1>
      <SelectCategory questions={props.questions} setCategory={setCategory} />

      {filteredQuestions.map((question) => {
        return (
          <>
            <button className="btn btn-primary">{question.question}</button>
            <button className="btn btn-primary">{question.a.answer}</button>
            <button className="btn btn-primary">{question.b.answer}</button>
            <button className="btn btn-primary">{question.c.answer}</button>
            <button className="btn btn-primary">{question.d.answer}</button>
          </>
        );
      })}
    </>
  );
}

export default PlayQuiz;
