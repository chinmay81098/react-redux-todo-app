import {
  SET_INITIAL_STATE,
  ADD_TODO,
  MARK_TODO,
  SORT_TODO_LIST,
  REORDER_TODO,
  DELETE_TODO
} from './actionType';


export const setInitialState = todos => ({
  type: SET_INITIAL_STATE,
  payload: {
    ...todos
  }
});


export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: Math.floor(Math.random() * 10000),
    text
  }
});


export const markTodo = todo => ({
  type: MARK_TODO,
  payload: {
    ...todo
  }
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {
    id
  }
});

export const reorderTodo = payload => ({
  type: REORDER_TODO,
  payload
});

export const sortTodo = () => ({
  type: SORT_TODO_LIST
});