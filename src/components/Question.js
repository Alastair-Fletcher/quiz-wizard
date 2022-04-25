/* eslint-disable */
import React from 'react';

function Question(props) {
  const [filteredQuestions, setfilteredQuestions] = useState(props.questions);
  const [category, setCategory] = useState('');

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
      <div className="card bg-base-100 shadow-xl mt-8">
        <div className="flex flex-row justify-between px-8">
          <h1 className="text-4xl pt-8 pr-8 leading-normal">
            {question.question}
          </h1>
          <span className="pt-8">
            <button className="btn btn-circle btn-outline">
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
          <button className="btn btn-primary">{question.a.answer}</button>
          <button className="btn btn-primary">{question.b.answer}</button>
          <button className="btn btn-primary">{question.c.answer}</button>
          <button className="btn btn-primary">{question.d.answer}</button>
        </div>
      </div>
    </>
  );
}

export default Question;
