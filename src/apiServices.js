const baseURL = 'http://localhost:3001';

export const postQuestion = async (question) => {
  return fetch(`${baseURL}/questions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(question),
  })
    .then((result) => result.json())
    .catch((error) => console.log(error));
};

export const getQuestions = async () => {
  return fetch(`${baseURL}/questions`)
    .then((result) => result.json())
    .catch((error) => console.log(error));
};

export const deleteQuestion = async (id) => {
  if (confirm('Are you sure you want to delete this?') === true) {
    return fetch(`${baseURL}/questions/${id}`, {
      method: 'DELETE',
    })
      .then((result) => result.json())
      .catch((error) => console.log(error));
  } else {
    return true;
  }
};
