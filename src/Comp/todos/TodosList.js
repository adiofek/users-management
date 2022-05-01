import React, { Component } from "react";
import Newtodo from "./Newtodo";
import TodoItem from "./TodoItem";

class TodosView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addtodo: false,
    };
  }

  addTodo = (obj) => {
    this.props.addtodo(obj);
    this.setState({ addtodo: false });
  };

  updateTodo = (obj) => {
    this.props.updateTodo(obj);
  };

  Cancel = () => {
    this.setState({ addtodo: false });
  };

  render() {
    let todosFilter = this.props.todos.filter((todos) => todos.userId === this.props.UserID);
    return (
      <div>
        <input
          type="button"
          className="btn btn-primary"
          value="Add Todo"
          onClick={(e) => this.setState({ addtodo: true })}
        />
        {this.state.addtodo && (
          <Newtodo cancel={this.Cancel} addtodo={this.addTodo} id={this.props.id} userid={this.props.UserID} />
        )}
        <div>
          {todosFilter.map((todo) => (
            <div key={todo.id}>
              <TodoItem todo={todo} updatetodo={this.updateTodo} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default TodosView;
