import React from "react";
import { hot } from "react-hot-loader";
import { ThemeProvider } from "styled-components";
import TodoList from "./todos/TodoList";
import NewTodoForm from "./todos/NewTodoForm";
import GlobalStyles from "./globalStyles"; // importing our global styles

const theme = {
  fontSizes: {
    sm: "30px",
    md: "45px",
    lg: "55px"
  },
  colors: {
    primary: "darkblue",
    secondary: "orange",
    back: "#eee"
  }
};

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <NewTodoForm />
    <TodoList />
  </ThemeProvider>
);

export default hot(module)(App);
