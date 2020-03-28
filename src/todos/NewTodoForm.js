import React, { useState } from "react";

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        type="text"
        className="new-todo-input"
        placeholder="Type your new todo"
        value={inputValue}
        onChange={evt => setInputValue(evt.target.value)}
      />
      <button className="new-todo-button">Create Todo</button>
    </div>
  );
};

export default NewTodoForm;
