import {createSelector} from 'reselect';

export const getTodos = state =>state.todos.data;
export const isLoadingTodos = state => state.todos.isLoading;
export const errorTodos = state => state.todos.error;
 

// export const getIncompleteTodos = state =>state.todos.data&& state.todos.data.filter(x=>!x.isCompleted);

//momoization if inputs are the same 
export const getIncompleteTodos=createSelector(
  getTodos,
  isLoadingTodos,
  (todos,isLoading)=>isLoading?[]:todos.filter(todo=>!todo.isCompleted),
)

// export const getCompletedTodos = state =>state.todos.data&& state.todos.data.filter(x=>x.isCompleted);

export const getCompletedTodos=createSelector(
  getTodos,
  todos=>todos.filter(todo=>todo.isCompleted),
)
