import { v4 as uuidv4 } from "uuid";
import {
  CREATE_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_ERROR
} from "./actions";

const initialState = {
  isLoading: false,
  data: [],
  error: null
};

export const todos = (state = initialState, action) => {
  const { type, payload } = action;
  console.log({ type, payload });
  switch (type) {
    case CREATE_TODO: {
      const { text, id } = payload;
      const newTodo = {
        id: id || uuidv4(),
        text,
        isCompleted: false
      };
      return { ...state, data: [...state.data, newTodo] };
    }
    case REMOVE_TODO: {
      const { id } = payload;
      return { ...state, data: state.data.filter(todo => todo.id !== id) };
    }
    case TOGGLE_TODO: {
      const { id } = payload;
      return {
        ...state,
        data: state.data.map(todo =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      };
    }
    case LOAD_TODOS_IN_PROGRESS: {
      return { ...state, isLoading: true };
    }
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return { ...state, isLoading: false, data: todos };
    }
    case LOAD_TODOS_ERROR: {
      const { error } = payload;
      return { ...state, isLoading: false, error };
    }
    default:
      return state;
  }
};
