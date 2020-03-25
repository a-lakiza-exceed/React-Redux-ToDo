import React from "react";
import Add from "./components/Add";
import { connect } from "react-redux";
import "./App.css";
import Todos from "./components/Todos";
import { loadData } from "./actions/todoActions";

class App extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <div className="content">
          <Add />
          <Todos />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loadData
};

export default connect(null, mapDispatchToProps)(App);
