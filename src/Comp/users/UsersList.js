import React, { Component } from "react";
import UserItem from "./UserItem";
import Spinner from "../Spinner";
export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClickID = (id) => {
    this.props.handleClickID(id);
  };

  handleDelete = (id) => {
    this.props.handleDelete(id);
  };
  handleUpdate = (obj) => {
    this.props.handleUpdate(obj);
  };

  render() {
    if (!this.props.loading)
      return (
        <div>
          {this.props.users.map((user) =>
            user.name.includes(this.props.search) ? (
              <div key={user.id}>
                <UserItem
                  id={user.id}
                  user={user}
                  handleClickID={this.handleClickID}
                  handleDelete={this.handleDelete}
                  handleUpdate={this.handleUpdate}
                />
              </div>
            ) : null
          )}
        </div>
      );
    else return <Spinner />;
  }
}
