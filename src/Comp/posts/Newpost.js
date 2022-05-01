import React, { Component } from "react";

class Newpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }

  addPost = () => {
    if (this.state.title.length > 1 && this.state.body.length > 1) {
      let obj = {
        userId: this.props.userid,
        id: this.props.id,
        title: this.state.title,
        body: this.state.body,
      };
      this.props.addpost(obj);
    }
  };

  Cancel = () => {
    this.props.cancel();
  };

  render() {
    return (
      <div className="smallcard">
        <h3>Add Post</h3>
        Title: <input type="text" className="input-users" onChange={(e) => this.setState({ title: e.target.value })} />
        <br />
        Body: <input type="text" className="input-users" onChange={(e) => this.setState({ body: e.target.value })} />
        <br />
        <input type="button" value="Cancel" className="btn btn-primary" onClick={(e) => this.Cancel()} />
        &nbsp;&nbsp;
        <input type="button" value="Add" className="btn btn-primary" onClick={(e) => this.addPost()} />
      </div>
    );
  }
}

export default Newpost;
