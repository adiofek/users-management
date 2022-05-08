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
          <row>
            <input
              type="text"
              placeholder="Name"
              className="input-users"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </row>
          <row>
            <input
              type="email"
              placeholder="Email"
              className="input-users"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </row>
        <div className="center"> 
          <row>
            <input type="button" value="Add" className="btn btn-primary" onClick={(e) => this.Adduser()} />
            <input type="button" value="Cancel" className="btn btn-primary" onClick={(e) => this.Cancel()} />{" "}
          </row>
          </div>

        </div>
    );
  }
}

export default Addnewuser;
