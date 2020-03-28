import { v4 as uuidv4 } from 'uuid';
import { CREATE_TODO, REMOVE_TODO } from "./actions";
export const todos = (state = [], action) => {
  const { type, payload } = action;
  console.log({type,payload})
  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const id=uuidv4();
      console.log({id})
      const newTodo = {
        id,
        text,
        isCompleted: false
      };
      return [...state, newTodo];
    }
    case REMOVE_TODO: {
      const { id } = payload;
      return state.filter(todo => todo.id !== id);
    }
    default:
      return state;
  }
};
