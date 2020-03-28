import React from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";

const TodoList = ({ todos=[] }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map(todo => (
      <TodoListItem key={todo.id} todo={todo} />
    ))}
  </div>
);

export default TodoList;
