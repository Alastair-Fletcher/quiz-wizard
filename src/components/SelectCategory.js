import React from 'react';

function SelectCategory({ questions, setCategory }) {
  function changeCategory(event) {
    const category = event.target.value;
    setCategory(category);
  }

  const uniqueCategories = [];
  questions.filter((question) => {
    const isDuplicate = uniqueCategories.includes(question.category);
    if (!isDuplicate) {
      uniqueCategories.push(question.category);
    }
    return true;
  });

  return (
    <div className="px-8 pt-8">
      <select
        data-testid="categories"
        name="categories"
        id="categories"
        onChange={changeCategory}
        className="select select-primary w-full"
      >
        {uniqueCategories.map((category) => {
          return (
            <option value={category} key={category}>
              {category}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectCategory;
