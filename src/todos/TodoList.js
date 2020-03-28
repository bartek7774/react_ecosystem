import React from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import { removeTodo } from "./actions";

const TodoList = ({ todos = [], onRemovePressed }) => (
  <div className="list-wrapper">
    {todos.map(todo => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        onRemovePressed={onRemovePressed}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: id => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
