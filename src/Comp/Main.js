import React, { Component } from "react";
import axios from "axios";
import UserList from "./users/UsersList";
import TodosList from "./todos/TodosList";
import PostsList from "./posts/PostsList";
import Newuser from "./users/Newuser";

const urlUsers = "https://jsonplaceholder.typicode.com/users/";
const urlTodos = "https://jsonplaceholder.typicode.com/todos/";
const urlPosts = "https://jsonplaceholder.typicode.com/posts/";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      todos: [],
      posts: [],
      loading: true,
      message: "Click on user ID to see to-dos and posts",
      id: "",
      search: "",
      username: "",
      adduser: false,
    };
  }

  async componentDidMount() {
    let Users = await axios.get(urlUsers);
    let Todos = await axios.get(urlTodos);
    let Posts = await axios.get(urlPosts);
    this.setState({ users: Users.data, todos: Todos.data, posts: Posts.data, loading: false });
  }

  DeleteUser = (id) => {
    let updatedUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({ users: updatedUsers });
    this.deleteTodosandPosts(id);
  };

  deleteTodosandPosts = (id) => {
    let Updatedtodos = this.state.todos.filter((todo) => todo.userId !== id);
    let Updatedposts = this.state.posts.filter((post) => post.userId !== id);
    this.setState({ todos: Updatedtodos, posts: Updatedposts });
  };

  UpdateUser = (obj) => {
    let index = this.state.users.findIndex((user) => {
      return user.id === obj.id;
    });
    let updatedUsers = this.state.users;
    updatedUsers[index] = obj;
    this.setState({ users: updatedUsers });
    window.alert("User updated successfully");
  };

  updateTodo = (obj) => {
    let index = this.state.todos.findIndex((todo) => {
      return todo.id === obj.id;
    });
    let updatedTodos = this.state.todos;
    updatedTodos[index] = obj;
    this.setState({ todos: updatedTodos });
  };

  handleCancel = () => {
    this.setState({ adduser: false, addtodo: false, addpost: false });
    this.setMessage();
  };

  handleClickID = (id) => {
    let user = this.state.users.filter((user) => user.id === id);
    let username = user[0].name;
    this.setState({ id: id, message: "", username: username });
  };

  OpenAddUserBox = () => {
    this.setState({ adduser: true, message: "" });
  };

  addUser = (obj) => {
    this.setState({ users: [...this.state.users, obj], adduser: false });
    window.alert("User added successfully");
  };
  addTodo = (obj) => {
    this.setState({ todos: [...this.state.todos, obj] });
    window.alert("Todo added successfully");
  };
  addPost = (obj) => {
    this.setState({ posts: [...this.state.posts, obj] });
    window.alert("Post added successfully");
  };

  setMessage = () => {
    this.setState({ message: "Click on user ID to see todos and posts" });
  };

  //   justify-content: space-between;
  //   align-items: center;

  render() {
    return (
      <div>
        <div className="row">
          <div className="message">
            <input
              type="text"
              placeholder="Search User"
              className="input-group"
              onChange={(e) => this.setState({ search: e.target.value })}
            />
          </div>
        </div>
        <div className="row">
          <div className="center">
            {this.state.id !== "" ? (
              <input
                type="button"
                value="Clear User"
                className="btn btn-primary"
                onClick={(e) => {
                  this.setState({ id: "", username: "" });
                  this.setMessage();
                }}
              />
            ) : (
              <input
                type="button"
                className="btn btn-primary"
                value="Add User"
                onClick={(e) => this.OpenAddUserBox()}
              />
            )}
          </div>
        </div>

        <div className="row">
          <div className="column message">
            {!this.state.adduser && this.state.id !== "" && (
              <TodosList
                UserID={this.state.id}
                todos={this.state.todos}
                username={this.state.username}
                addtodo={this.addTodo}
                id={this.state.todos[this.state.todos.length - 1].id + 1}
                updateTodo={this.updateTodo}
              />
            )}
          </div>

          <div className="column message">
            {this.state.id === "" && <h2>Users List</h2>}
            <pr>{this.state.message} </pr>

            {!this.state.adduser && this.state.id === "" && (
              <UserList
                users={this.state.users}
                handleClickID={this.handleClickID}
                handleDelete={this.DeleteUser}
                handleUpdate={this.UpdateUser}
                loading={this.state.loading}
                search={this.state.search}
              />
            )}
            {this.state.adduser && (
              <Newuser
                cancel={this.handleCancel}
                addUser={this.addUser}
                id={this.state.users[this.state.users.length - 1].id + 1}
              />
            )}

            {this.state.id !== "" && (
              <PostsList
                UserID={this.state.id}
                posts={this.state.posts}
                username={this.state.username}
                addpost={this.addPost}
                id={this.state.posts[this.state.posts.length - 1].id + 1}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Users;
