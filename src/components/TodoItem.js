import React from "react";
import Checkbox from "./Checkbox";
import { connect } from "react-redux";
import { removeTodo } from "../actions/todoActions";

const classNames = require("classnames");
class TodoItem extends React.Component {
  state = {
    isEditing: false,
    text: this.props.todo.text
  };

  handleDoubleClick = () => {
    this.setState({ isEditing: true });
  };

  handleChange = e => {
    const text = e.currentTarget.value;
    this.setState({
      text: text
    });
  };

  handleRemoveButtonClick = id => {
    this.props.removeTodo(id);
  };

  handleCheckBoxChange = () => {};

  render() {
    const { todo } = this.props;
    const textClasses = classNames({
      itemText: true,
      completed: todo.isCompleted
    });
    const itemClasses = classNames("todoItem");
    let item;
    if (this.state.isEditing) {
      item = (
        <div>
          <input
            className="input"
            onChange={this.handleChange}
            value={this.state.text}
          />
        </div>
      );
    } else {
      item = (
        <div className={itemClasses}>
          <Checkbox
            handleCheckBoxChange={this.handleCheckBoxChange}
            todo={todo}
          />
          <span className={textClasses} onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </span>
          <button
            className="removeButton"
            onClick={() => this.handleRemoveButtonClick(todo._id)}
          ></button>
        </div>
      );
    }
    return <React.Fragment>{item}</React.Fragment>;
  }
}

const mapDispatchToProps = {
  removeTodo
};

export default connect(null, mapDispatchToProps)(TodoItem);
