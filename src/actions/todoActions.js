import axios from "axios";
import { ADD_TODO, LOAD_DATA, REMOVE_TODO } from "../types/actionTypes";

export function addTodo(text) {
  return function(dispatch) {
    axios
      .post(`http://localhost:2000/todos/create/`, {
        text,
        isCompleted: false
      })
      .then(res => {
        dispatch({
          type: ADD_TODO,
          payload: res.data
        });
        //this.addNotify(`Added todo: ${text}`);
      });
  };
}

export function loadData() {
  return function(dispatch) {
    axios.get(`http://localhost:2000/todos/`).then(res => {
      const todos = [...res.data].reverse();
      dispatch({
        type: LOAD_DATA,
        payload: todos
      });
    });
  };
}

export function removeTodo(id) {
  return function(dispatch) {
    axios.delete(`http://localhost:2000/todos/${id}/delete`).then(() => {
      dispatch({
        type: REMOVE_TODO,
        payload: id
      });
    });
  };
}

