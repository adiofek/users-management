import React, { Component } from "react";
import OtherData from "./OtherData";

export default class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otherdata: false,
      email: this.props.user.email,
      name: this.props.user.name,
      street: this.props.user.address.street,
      city: this.props.user.address.city,
      zipcode: this.props.user.address.zipcode,
    };
  }
  handleClickID = (id) => {
    this.props.handleClickID(id);
  };

  handleUpdate = (id) => {
    let obj = {
      id: id,
      name: this.state.name,
      email: this.state.email,
      address: {
        street: this.state.street,
        city: this.state.city,
        zipcode: this.state.zipcode,
      },
    };
    this.props.handleUpdate(obj);
  };

  deleteUser = (id) => {
    this.props.handleDelete(id);
  };

  ChangeStreet = (updatedStreet) => {
    this.setState({ street: updatedStreet });
  };
  ChangeCity = (updatedCity) => {
    this.setState({ city: updatedCity });
  };
  ChangeZipcode = (updatedZipcode) => {
    this.setState({ zipcode: updatedZipcode });
  };

  render() {
    let id = this.props.id;

    return (
      <div className="card">
        <input
          type="button"
          value={`ID: ${id}`}
          className="btn btn-secondary"
          onClick={(e) => this.handleClickID(id)}
        />
        <br />
        <b>Name: </b>
        <input
          className="input-users"
          type="text"
          defaultValue={this.props.user.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />{" "}
        <br />
        <b>Email: </b>
        <input
          type="email"
          className="input-users"
          defaultValue={this.props.user.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <br />
        <input
          type="button"
          className="btn btn-secondary"
          value="Other Data"
          onClick={(e) => this.setState({ otherdata: !this.state.otherdata })}
        />{" "}
        &nbsp;&nbsp;
        {this.state.otherdata && (
          <OtherData
            user={this.props.user}
            handleChangeStreet={this.ChangeStreet}
            handleChangeCity={this.ChangeCity}
            handleChangeZipcode={this.ChangeZipcode}
          />
        )}
        <input type="button" value="Update" className="btn btn-secondary" onClick={(e) => this.handleUpdate(id)} />{" "}
        &nbsp;&nbsp;
        <input
          type="button"
          value="Delete"
          className="btn btn-secondary"
          onClick={(e) => {
            this.deleteUser(id);
          }}
        />
      </div>
    );
  }
}
