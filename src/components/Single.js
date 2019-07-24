import React, { Component } from 'react';
import Photo from './Photo';
import Comment from './Comment';

export default class Single extends Component {
  render() {
    const { postId } = this.props.match.params;
    // we need index of the post
    const i = this.props.posts.findIndex(post => post.code === postId);
    // get us the post
    const post = this.props.posts[i];

    //get us the comments
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo post={post} i={i} {...this.props} />
        <Comment postComments={postComments} {...this.props} />
      </div>
    );
  }
}
