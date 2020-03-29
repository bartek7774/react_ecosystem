export const CREATE_TODO = "CREATE_TODO";

export const createTodo = text => ({
  type: CREATE_TODO,
  payload: { text }
});

export const REMOVE_TODO = "REMOVE_TODO";

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: { id }
});

export const TOGGLE_TODO = "TOGGLE_TODO";

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});


export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";

export const loadTodosInProgress = id => ({
  type: LOAD_TODOS_IN_PROGRESS
});

export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";

export const loadTodosSuccess = todos => ({
  type: LOAD_TODOS_SUCCESS,
  payload: {todos}
});

export const LOAD_TODOS_ERROR = "LOAD_TODOS_ERROR";

export const loadTodosError = error => ({
  type: LOAD_TODOS_ERROR,
  payload: {error}
});
