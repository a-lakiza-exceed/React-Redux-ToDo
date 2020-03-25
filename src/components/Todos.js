import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";

const Todos = ({ todos }) => {
  const renderTodos = () => {
    let TodosTemplate = null;
    if (todos.length) {
      TodosTemplate = todos.map(function(item) {
        return <TodoItem key={item._id} todo={item} />;
      });
    }
    return TodosTemplate;
  };
  return <div className="todos">{renderTodos()}</div>;
};
const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  };
};
export default connect(mapStateToProps)(Todos);
