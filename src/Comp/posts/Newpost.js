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
      <div className="card">
        <h3>Add Post</h3>
        <input
          type="text"
          placeholder="Title"
          className="input-users"
          onChange={(e) => this.setState({ title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Body"
          className="input-users"
          onChange={(e) => this.setState({ body: e.target.value })}
        />
        <div className="center">
          <row>
            <input type="button" value="Add" className="btn btn-primary" onClick={(e) => this.addPost()} />
            <input type="button" value="Cancel" className="btn btn-primary" onClick={(e) => this.Cancel()} />
          </row>
        </div>
      </div>
    );
  }
}

export default Newpost;
