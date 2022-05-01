import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  MarkCompleted = () => {
    let obj = {
      userId: this.props.todo.userId,
      id: this.props.todo.id,
      title: this.props.todo.title,
      completed: true,
    };
    this.props.updatetodo(obj);
  };
  render() {
    let todo = this.props.todo;

    return (
      <div>
        <div key={todo.id} className="card">
          <strong>Title: </strong> {todo.title} <br />
          <strong>Completed: </strong> {todo.completed.toString()} <br />
          {!todo.completed && (
            <input
              type="button"
              className="btn btn-markcompleted"
              value=" Mark Completed"
              onClick={(e) => this.MarkCompleted()}
            />
          )}
        </div>
      </div>
    );
  }
}

export default TodoItem;
