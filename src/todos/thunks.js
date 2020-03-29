import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosError,
  createTodo,
  removeTodo
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    setTimeout(() => {
      dispatch(
        loadTodosSuccess([
          {
            id: 1,
            text: "1",
            isCompleted: false
          },
          {
            id: 2,
            text: "2",
            isCompleted: true
          }
        ])
      );
    }, 1000);
  } catch (err) {
    dispatch(loadTodosError({ message: "Bład" }));
  }
};

export const postTodo = text => async (dispatch) => {
  try {
    // throw new Error('iokok');
    setTimeout(() => {
      dispatch(createTodo(text));
    }, 1000);
  } catch (err) {
    dispatch(displayAlert('e'));
  }
};

export const deleteTodo = id => async (dispatch) => {
  try {
    // throw new Error('iokok');
    setTimeout(() => {
      dispatch(removeTodo(id));
    }, 1000);
  } catch (err) {
    dispatch(displayAlert('e'));
  }
};

export const displayAlert = text => () => {
  alert(`displayAlert: ${text}`);
};
