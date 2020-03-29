import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import { toggleTodo } from "./actions";
import { loadTodos, deleteTodo } from "./thunks";
import {
  isLoadingTodos,
  errorTodos,
  getTodos,
  getCompletedTodos,
  getIncompleteTodos
} from "./selectors";

const TodoList = ({
  incompletedTodos=[],
  completedTodos=[],
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
    <div className="list-container">
      <div className="list-wrapper">
        {incompletedTodos.map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onRemovePressed={onRemovePressed}
            onTogglePressed={onTogglePressed}
          />
        ))}
      </div>
      <hr/>
      <div className="list-wrapper">
        {completedTodos.map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onRemovePressed={onRemovePressed}
            onTogglePressed={onTogglePressed}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: isLoadingTodos(state),
  todos: getTodos(state),
  incompletedTodos: getIncompleteTodos(state),
  completedTodos: getCompletedTodos(state),
  error: errorTodos(state)
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: id => dispatch(deleteTodo(id)),
  onTogglePressed: id => dispatch(toggleTodo(id)),
  onLoadTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
