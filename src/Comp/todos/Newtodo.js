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
      <div className="smallcard">
        <h3>Add Todo</h3>
        Title:
        <input type="text" className="input-users" onChange={(e) => this.setState({ newtodo: e.target.value })} />
        <br />
        <br />
        <input type="button" value="Cancel" className="btn btn-primary" onClick={(e) => this.Cancel()} />
        &nbsp;&nbsp;
        <input type="button" value="Add" className="btn btn-primary" onClick={(e) => this.addTodo()} />
      </div>
    );
  }
}

export default Newtodo;
