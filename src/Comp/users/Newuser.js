import React, { Component } from "react";

class Addnewuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  Adduser = () => {
    if (this.state.name.length > 1 && this.state.email.length > 5 && this.state.email.includes("@")) {
      let obj = {
        id: this.props.id,
        name: this.state.name,
        email: this.state.email,
        address: {
          street: "",
          city: "",
          zipcode: "",
        },
      };

      this.props.addUser(obj);
    } else if (this.state.name.length === 0 || this.state.email.length === 0)
      alert("Please fill both the name and email fields");
    else alert("Please fill a valid name and email address");
  };

  Cancel = () => {
    this.props.cancel();
  };

  render() {
    return (
      <div className="card">
        <h3>Add User</h3>
        <strong>Name: </strong>{" "}
        <input type="text" className="input-users" onChange={(e) => this.setState({ name: e.target.value })} />
        <br />
        <strong>Email: </strong>
        <input type="email" className="input-users" onChange={(e) => this.setState({ email: e.target.value })} /> <br />
        <input type="button" value="Cancel" className="btn btn-primary" onClick={(e) => this.Cancel()} /> &nbsp;&nbsp;
        <input type="button" value="Add" className="btn btn-primary" onClick={(e) => this.Adduser()} />
      </div>
    );
  }
}

export default Addnewuser;
