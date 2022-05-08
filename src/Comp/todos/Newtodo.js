import React, { Component } from "react";

class Newtodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newtodo: "",
    };
  }

  addTodo = () => {
    if (this.state.newtodo.length > 1) {
      let obj = {
        userId: this.props.userid,
        id: this.props.id,
        title: this.state.newtodo,
        completed: false,
      };
      this.props.addtodo(obj);
    }
  };

  Cancel = () => {
    this.props.cancel();
  };

  render() {
    return (
      <div className="card">
        <h3>Add Todo</h3>
        <input
          type="text"
          placeholder="Title"
          className="input-users"
          onChange={(e) => this.setState({ newtodo: e.target.value })}
        />
        <br />
        <input type="button" value="Add" className="btn btn-primary" onClick={(e) => this.addTodo()} />
        <input type="button" value="Cancel" className="btn btn-primary" onClick={(e) => this.Cancel()} />
      </div>
    );
  }
}

export default Newtodo;
