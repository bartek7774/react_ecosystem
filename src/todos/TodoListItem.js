import React from "react";

const TodoListItem = ({ todo, onRemovePressed, onTogglePressed }) => (
  <div className="todo-item-container">
    <h3 style={{textDecoration:todo.isCompleted?'line-through':''}}>{todo.text}</h3>
    <div className="buttons-container">
        <button
          className="completed-button"
          onClick={() => onTogglePressed(todo.id)}
        >
          {!todo.isCompleted?"Mark As Completed":"Mark as uncompleted"}
        </button>
      <button
        className="remove-button"
        onClick={() => onRemovePressed(todo.id)}
      >
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
