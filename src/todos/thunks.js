import moment from 'moment';
import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosError,
  createTodo,
  removeTodo
} from "./actions";

const API='https://jsonplaceholder.typicode.com';

const fakeData=[
  {
    id: 1,
    text: "1",
    isCompleted: false,
    createdAt: moment().subtract(7, 'days')
  },
  {
    id: 2,
    text: "2",
    isCompleted: true,
    createdAt: moment().subtract(1, 'days')
  }
]

export const loadTodos = () => async dispatch => {
  try {
    dispatch(loadTodosInProgress());
    const data=await fetch(`${API}/todos`).then(res=>res.json());
    console.log(data)
    dispatch(
      loadTodosSuccess(fakeData)
    );
    // setTimeout(() => {
    // }, 1000);
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
