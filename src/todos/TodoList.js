import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import TodoListItem from "./TodoListItem";
import { toggleTodo } from "./actions";
import { loadTodos, deleteTodo } from "./thunks";
import {
  isLoadingTodos,
  errorTodos,
  getCompletedTodos,
  getIncompleteTodos
} from "./selectors";

const ListConainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
`;

const ListWrapper = styled.div`
  margin: auto;
  flex: 1 1 45%;
  background-color: #eee;
`;

const bigTheme = {
  fontSizes: {
    sm: "20px",
    md: "35px",
    lg: "45px"
  },
  colors: {
    primary: "green",
    secondary: "yellow"
  }
};

const TodoList = ({
  incompletedTodos = [],
  completedTodos = [],
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
    <ListConainer>
      <ListWrapper>
        <h2>Incompleted:</h2>
        {incompletedTodos.map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onRemovePressed={onRemovePressed}
            onTogglePressed={onTogglePressed}
          />
        ))}
      </ListWrapper>
      <hr />
      <ThemeProvider theme={bigTheme}>
        <ListWrapper>
          <h2>Completed:</h2>
          {completedTodos.map(todo => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onRemovePressed={onRemovePressed}
              onTogglePressed={onTogglePressed}
            />
          ))}
        </ListWrapper>
      </ThemeProvider>
    </ListConainer>
  );
};

const mapStateToProps = state => ({
  isLoading: isLoadingTodos(state),
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
