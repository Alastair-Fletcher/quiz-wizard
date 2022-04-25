const baseURL = 'http://localhost:3001';

//============= post questions
export const postQuestion = async (question) => {
  return fetch(`${baseURL}/questions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(question),
  })
    .then((result) => result.json())
    .catch((error) => console.log(error));
};

//============= get questions
export const getQuestions = async () => {
  return fetch(`${baseURL}/questions`)
    .then((result) => result.json())
    .catch((error) => console.log(error));
};

// TODO -- "delete / edit questions"
//============= delete questions
export const deleteQuestion = async (question) => {
  return fetch(`${baseURL}/questions`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(question),
  })
    .then((result) => result.json())
    .catch((error) => console.log(error));
};
