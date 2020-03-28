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
