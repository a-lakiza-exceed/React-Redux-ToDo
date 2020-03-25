import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";

class Add extends React.Component {
  state = {
    text: ""
  };

  submitHandler = e => {
    e.preventDefault();
    const { text } = this.state;
    this.props.addTodo(text);
    this.setState({
      text: ""
    });
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ text: value });
  };

  render() {
    return (
      <form className="addForm" onSubmit={this.submitHandler}>
        <input type="checkbox" className="toggleAll" />
        <input
          id="newItem"
          className="input"
          type="text"
          autoFocus={true}
          onChange={this.handleChange}
          placeholder="What needs to be done?"
          value={this.state.text}
        />
      </form>
    );
  }
}

const mapDispatchToProps = {
  addTodo
};

export default connect(null, mapDispatchToProps)(Add);
