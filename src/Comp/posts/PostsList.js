import React, { Component } from "react";
import Newpost from "./Newpost";
import PostItem from "./PostItem";

class PostsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addpost: false,
    };
  }

  addPost = (obj) => {
    this.props.addpost(obj);
  };

  Cancel = () => {
    this.setState({ addpost: false });
  };

  render() {
    let postsFilter = this.props.posts.filter((post) => post.userId === this.props.UserID);
    return (
      <div>
        <input
          type="button"
          className="btn btn-primary"
          value="Add Post"
          onClick={(e) => this.setState({ addpost: true })}
        />
        {this.state.addpost && (
          <Newpost cancel={this.Cancel} addpost={this.addPost} id={this.props.id} userid={this.props.UserID} />
        )}
        {postsFilter.map((post) => (
          <div key={post.id}>
            <PostItem post={post} />
          </div>
        ))}
      </div>
    );
  }
}

export default PostsView;
