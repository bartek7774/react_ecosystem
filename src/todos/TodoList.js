import React from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import { removeTodo, toggleTodo } from "./actions";

const TodoList = ({ todos = [], onRemovePressed, onTogglePressed }) => (
  <div className="list-wrapper">
    {todos.map(todo => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        onRemovePressed={onRemovePressed}
        onTogglePressed={onTogglePressed}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: id => dispatch(removeTodo(id)),
  onTogglePressed: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
