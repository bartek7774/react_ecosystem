import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import { toggleTodo } from "./actions";
import { loadTodos, deleteTodo } from "./thunks";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onTogglePressed,
  onLoadTodos,
  isLoading,
  error
}) => {
  useEffect(() => {
    onLoadTodos();
  }, []);
  if (isLoading) return <p>.....</p>;
  if (error) return <p>error</p>;
  return (
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
};

const mapStateToProps = state => ({
  todos: state.todos.data,
  isLoading: state.todos.isLoading,
  error: state.todos.error
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: id => dispatch(deleteTodo(id)),
  onTogglePressed: id => dispatch(toggleTodo(id)),
  onLoadTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
