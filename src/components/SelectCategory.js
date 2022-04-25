/* eslint-disable */
import React from 'react';
// import { getQuestions } from '../apiServices';
// import Question from './Question';

function SelectCategory(props) {
  function handleChange(event) {
    const category = event.target.value;
    props.setCategory(category);
    // return category;
  }

  // get unique Q categories to select
  const uniqueCategories = [];
  props.questions.filter((question) => {
    const isDuplicate = uniqueCategories.includes(question.category);
    if (!isDuplicate) {
      uniqueCategories.push(question.category);
      return true;
    }
  });

  return (
    <div className="px-8 pt-8">
      <select
        name="categories"
        id="categories"
        onChange={handleChange}
        className="select select-primary w-full"
      >
        {uniqueCategories.map((category) => {
          return <option value={category}>{category}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectCategory;
