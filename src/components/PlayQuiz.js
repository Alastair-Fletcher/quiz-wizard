/* eslint-disable */
import React, { useState, useEffect } from 'react';
import SelectCategory from './SelectCategory';

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
      <SelectCategory questions={props.questions} setCategory={setCategory} />

      {filteredQuestions.map((question) => {
        // TODO - // should these handlers be here? how to access correct answr for each Q
        function deleteHandler() {
          console.log(question._id);
        }

        function answerHandler() {
          console.log(question.c.correctAnswer);
        }

        return (
          <>
            <div className="card bg-base-100 shadow-xl mt-8">
              <div className="flex flex-row justify-between px-8">
                <h1 className="text-4xl pt-8 pr-8 leading-normal">
                  {question.question}
                </h1>
                <span className="pt-8">
                  <button
                    className="btn btn-circle btn-outline"
                    onClick={deleteHandler}
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
                <button className="btn btn-primary" onClick={answerHandler}>
                  {question.a.answer}
                </button>
                <button className="btn btn-primary" onClick={answerHandler}>
                  {question.b.answer}
                </button>
                <button className="btn btn-primary" onClick={answerHandler}>
                  {question.c.answer}
                </button>
                <button className="btn btn-primary" onClick={answerHandler}>
                  {question.d.answer}
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default PlayQuiz;
