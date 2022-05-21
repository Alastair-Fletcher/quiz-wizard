import React, { useEffect, useState } from 'react';
import { deleteQuestion } from '../apiServices';
import shuffle from 'lodash.shuffle';

function Questions({ questions, category, setFetchQuestions }) {
  const [filteredQuestions, setfilteredQuestions] = useState(questions);
  useEffect(() => {
    setfilteredQuestions(
      shuffle(
        questions.filter((question) => {
          return question.category === category;
        })
      )
    );
  }, [category]);

  function answerQuestion(correct, id) {
    if (correct) {
      setfilteredQuestions(
        filteredQuestions.filter((question) => question._id !== id)
      );
    }
  }

  return (
    <>
      {filteredQuestions.map((question) => {
        return (
          <div className="card bg-base-100 mt-8" key={question._id}>
            <div className="flex flex-row justify-between px-8">
              <h1 className="text-4xl pt-8 pr-8 leading-normal">
                {question.question}
              </h1>
              <span className="pt-8">
                <button
                  className="btn btn-circle btn-outline"
                  onClick={() => {
                    deleteQuestion(question._id).then((res) => {
                      console.log(res);
                      setFetchQuestions((prev) => !prev);
                      setfilteredQuestions(
                        filteredQuestions.filter((q) => q._id !== res._id)
                      );
                    });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </span>
            </div>

            <div className="card-body grid grid-cols-2 gap-8">
              <button
                className="btn btn-accent"
                onClick={() => {
                  answerQuestion(question.a.correctAnswer, question._id);
                }}
              >
                {question.a.answer}
              </button>
              <button
                className="btn btn-accent"
                onClick={() => {
                  answerQuestion(question.b.correctAnswer, question._id);
                }}
              >
                {question.b.answer}
              </button>
              <button
                className="btn btn-accent"
                onClick={() => {
                  answerQuestion(question.c.correctAnswer, question._id);
                }}
              >
                {question.c.answer}
              </button>
              <button
                className="btn btn-accent"
                onClick={() => {
                  answerQuestion(question.d.correctAnswer, question._id);
                }}
              >
                {question.d.answer}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Questions;
