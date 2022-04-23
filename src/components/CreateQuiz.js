import React, { useState } from 'react';
import { postQuestion } from '../apiServices';

function CreateQuiz() {
  const [questions, setQuestions] = useState([]);

  function submitHandler(question) {
    question.preventDefault();

    const newQuestion = {
      category: question.target.category.value.toLowerCase(),
      question: question.target.question.value.toLowerCase(),
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
        setQuestions((previousQuestions) => [...previousQuestions, dbQuestion]);
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
      <form onSubmit={submitHandler}>
        <label htmlFor="category">category</label>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="type category..."
          required
        />

        <label htmlFor="question">question</label>
        <input
          type="text"
          name="question"
          id="question"
          placeholder="type your q..."
          required
        />

        <div className="options">
          <div className="option">
            <label htmlFor="a">a</label>
            <input
              type="text"
              name="answer"
              id="a"
              placeholder="option a..."
              required
            />
            <span className="radios">
              <input
                type="radio"
                name="correctAnswer"
                className="radio-md"
                id="correctA"
              />
            </span>
          </div>

          <div className="option">
            <label htmlFor="b">b</label>
            <input
              type="text"
              name="answer"
              id="b"
              placeholder="option b..."
              required
            />
            <span className="radios">
              <input
                type="radio"
                name="correctAnswer"
                className="radio-md"
                id="correctB"
              />
            </span>
          </div>

          <div className="option">
            <label htmlFor="c">c</label>
            <input
              type="text"
              name="answer"
              id="c"
              placeholder="option c..."
              required
            />
            <span className="radios">
              <input
                type="radio"
                name="correctAnswer"
                className="radio-md"
                id="correctC"
              />
            </span>
          </div>

          <div className="option">
            <label htmlFor="d">d</label>
            <input
              type="text"
              name="answer"
              id="d"
              placeholder="option d..."
              required
            />

            <span className="radios">
              <input
                type="radio"
                name="correctAnswer"
                className="radio-md"
                id="correctD"
              />
            </span>
          </div>
        </div>

        <button type="submit" id="submit" className="btn btn-secondary">
          CREATE
        </button>
      </form>
    </div>
  );
}

export default CreateQuiz;
