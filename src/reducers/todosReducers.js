import { ADD_TODO, LOAD_DATA, REMOVE_TODO } from "../types/actionTypes";

const initialState = {
  todos: []
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, todos: [...action.payload] };
    case ADD_TODO:
      return { ...state, todos: [action.payload, ...state.todos] };
    case REMOVE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo._id !== action.payload) };
    default:
      return state;
  }
};
