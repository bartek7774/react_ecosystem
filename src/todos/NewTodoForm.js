import React, { useState } from "react";
import { connect } from "react-redux";
import { postTodo } from "./thunks";
import {getTodos} from './selectors';

const NewTodoForm = ({todos=[],onCreatePressed}) => {
  const [inputValue, setInputValue] = useState("");
  const isDuplicated=todos.some(x=>x.text===inputValue);
  const handleClick=()=>{
      onCreatePressed(inputValue);
      setInputValue('');
  }
  return (
    <div className="new-todo-form">
      {isDuplicated && <p>It is duplicated!!!</p>}
      <input
        type="text"
        className="new-todo-input"
        placeholder="Type your new todo"
        value={inputValue}
        onChange={evt => setInputValue(evt.target.value)}
      />
      <button className="new-todo-button" disabled={!inputValue||isDuplicated} onClick={handleClick} >Create Todo</button>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: getTodos(state)
});

const mapDispatchToProps=dispatch=>({
  onCreatePressed: text=>dispatch(postTodo(text))
})

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);
