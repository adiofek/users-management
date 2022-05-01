import React, { Component } from "react";

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let post = this.props.post;

    return (
      <div className="card">
        <strong>Title:</strong> {post.title} <br />
        <br />
        <strong>Body: </strong> {post.body}
      </div>
    );
  }
}

export default PostItem;
