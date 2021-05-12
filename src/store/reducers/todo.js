import {
  SET_INITIAL_STATE,
  ADD_TODO, MARK_TODO,
  DELETE_TODO,
  SORT_TODO_LIST,
  REORDER_TODO
} from '../actions/actionType';
import { getSortedList } from '../../utils';

const initialState = {
  inProgress: [],
  completed: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE: { 
      return {
        ...state,
        inProgress: action.payload.inProgress,
        completed: action.payload.completed
      }
    }
    case ADD_TODO:
      return {
        ...state,
        inProgress: [
          ...state.inProgress,
          { ...action.payload }
        ]
      }
    case MARK_TODO: {
      const inProgress = state.inProgress
        .filter(todo => action.payload.id !== todo.id);
      return {
        ...state,
        inProgress,
        completed: [
          ...state.completed,
          { ...action.payload }
        ]
      }
    }
    case DELETE_TODO: {
      const inProgress = state.inProgress
        .filter(todo => action.payload.id !== todo.id);
      const completed = state.completed
        .filter(todo => action.payload.id !== todo.id);
      return {
        ...state,
        inProgress,
        completed
      }
    }
    case REORDER_TODO: { 
      const inProgress = [...state.inProgress];
      const [todo] = inProgress.splice(action.payload.source, 1);
      inProgress.splice(action.payload.destination, 0, todo);
      return {...state, inProgress }
    }
    case SORT_TODO_LIST: {
      const inProgress = getSortedList(state.inProgress);
      const completed = getSortedList(state.completed);
      return { ...state, inProgress, completed }
    }
    default:
      return state
  }
}

export default todoReducer;