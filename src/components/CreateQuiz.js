/* eslint-disable */
import React, { useState } from 'react';
import { postQuestion } from '../apiServices';

function CreateQuiz() {
  const [questions, setQuestions] = useState([]);

  function submitHandler(question) {
    question.preventDefault();

    const newQuestion = {
      category: question.target.category.value.toLowerCase(),
      question: question.target.question.value,
      a: {
        answer: question.target.a.value.toLowerCase(),
        correctAnswer: question.target.correctA.checked,
      },
      b: {
        answer: question.target.b.value.toLowerCase(),
        correctAnswer: question.target.correctB.checked,
      },
      c: {
        answer: question.target.c.value.toLowerCase(),
        correctAnswer: question.target.correctC.checked,
      },
      d: {
        answer: question.target.d.value.toLowerCase(),
        correctAnswer: question.target.correctD.checked,
      },
    };

    postQuestion(newQuestion)
      .then((dbQuestion) => {
        setQuestions((prevQuestions) => [...prevQuestions, dbQuestion]);
        question.target.category.value = '';
        question.target.question.value = '';
        question.target.a.value = '';
        question.target.b.value = '';
        question.target.c.value = '';
        question.target.d.value = '';
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="create-quiz">
      <form onSubmit={submitHandler} className="flex flex-col">
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
              className="radio radio-md flex items-center"
              id="correctA"
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
              className="radio radio-md flex items-center"
              id="correctB"
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
              className="radio radio-md flex items-center"
              id="correctC"
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
              className="radio radio-md flex items-center"
              id="correctD"
            />
          </span>
        </div>
        <div className="p-8">
          <button
            type="submit"
            id="submit"
            className="btn btn-secondary btn-block"
          >
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateQuiz;
