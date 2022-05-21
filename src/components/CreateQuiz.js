/* eslint-disable */
import React, { useState } from 'react';
import { postQuestion } from '../apiServices';

function CreateQuiz({ setFetchQuestions }) {
  const [questions, setQuestions] = useState([]);
  const [checked, setChecked] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
  });

  const changeRadio = (e) => {
    setChecked((prev) => {
      return { ...prev, [e.target.value]: true };
    });
    console.log(checked);
  };

  function submitQuestion(e) {
    e.preventDefault();
    const newQuestion = {
      category: e.target.category.value.toLowerCase(),
      question: e.target.question.value,
      a: {
        answer: e.target.a.value.toLowerCase(),
        correctAnswer: e.target.correctA.checked,
      },
      b: {
        answer: e.target.b.value.toLowerCase(),
        correctAnswer: e.target.correctB.checked,
      },
      c: {
        answer: e.target.c.value.toLowerCase(),
        correctAnswer: e.target.correctC.checked,
      },
      d: {
        answer: e.target.d.value.toLowerCase(),
        correctAnswer: e.target.correctD.checked,
      },
    };

    postQuestion(newQuestion)
      .then((dbQuestion) => {
        setQuestions((questions) => [...questions, dbQuestion]);
        e.target.category.value = '';
        e.target.question.value = '';
        e.target.a.value = '';
        e.target.b.value = '';
        e.target.c.value = '';
        e.target.d.value = '';
        setFetchQuestions((prev) => {
          return !prev;
        });
        setChecked(() => {
          return { a: false, b: false, c: false, d: false };
        });
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="create-quiz">
      <form onSubmit={submitQuestion} className="flex flex-col">
        <div className="pt-8 px-8 pb-0 flex items-center justify-between">
          <input
            type="text"
            name="category"
            id="category"
            className="input w-full input-primary"
            placeholder="category..."
            required
          />
        </div>
        <div className="pt-8 px-8 pb-0 flex items-center justify-between">
          <input
            type="text"
            name="question"
            id="question"
            className="input w-full input-primary"
            placeholder="question..."
            required
          />
        </div>
        <div className="pt-8 px-8 pb-0 flex items-center justify-between">
          <input
            type="text"
            name="answer"
            id="a"
            className="input w-full"
            placeholder="option a..."
            required
          />
          <span className="radios pl-8">
            <input
              type="radio"
              name="correctAnswer"
              className="radio radio-md radio-primary flex items-center"
              id="correctA"
              checked={checked.a}
              value={'a'}
              onChange={changeRadio}
              required
            />
          </span>
        </div>
        <div className="pt-8 px-8 pb-0 flex items-center justify-between">
          <input
            type="text"
            name="answer"
            id="b"
            className="input w-full"
            placeholder="option b..."
            required
          />
          <span className="radios pl-8">
            <input
              type="radio"
              name="correctAnswer"
              className="radio radio-md radio-primary flex items-center"
              id="correctB"
              checked={checked.b}
              value={'b'}
              onChange={changeRadio}
            />
          </span>
        </div>
        <div className="pt-8 px-8 pb-0 flex items-center justify-between">
          <input
            type="text"
            name="answer"
            id="c"
            className="input w-full"
            placeholder="option c..."
            required
          />
          <span className="radios pl-8">
            <input
              type="radio"
              name="correctAnswer"
              className="radio radio-md radio-primary flex items-center"
              id="correctC"
              checked={checked.c}
              value={'c'}
              onChange={changeRadio}
            />
          </span>
        </div>
        <div className="pt-8 px-8 pb-0 flex items-center justify-between">
          <input
            type="text"
            name="answer"
            id="d"
            className="input w-full"
            placeholder="option d..."
            required
          />

          <span className="radios pl-8">
            <input
              type="radio"
              name="correctAnswer"
              className="radio radio-md radio-primary flex items-center"
              id="correctD"
              checked={checked.d}
              value={'d'}
              onChange={changeRadio}
            />
          </span>
        </div>
        <div className="p-8">
          <button type="submit" id="submit" className="btn btn-error btn-block">
            ADD QUESTION
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateQuiz;
