import React, { Component } from 'react';
import Photo from './Photo';
import Comment from './Comment';
import Axios from 'axios';

var listOfPlaces = [];

export default class Single extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false, contacts: [] };
  }

  componentDidMount() {
    Axios.get(`/api/greeting`)
      .then(res => {
        console.log(res);
        this.setState({ isLoaded: true });
      })
      .catch(error => console.log(error));
  }
  render() {
    const { isLoaded } = this.state;
    const { postId } = this.props.match.params;
    // we need index of the post
    const i = this.props.posts.findIndex(post => post.code === postId);
    // get us the post
    const post = this.props.posts[i];

    //get us the comments
    const postComments = this.props.comments[postId] || [];
    if (this.state.isLoaded === false) {
      return <div>loading data...</div>;
    } else {
      return (
        <div className="single-photo">
          <Photo post={post} i={i} {...this.props} />
          <Comment postComments={postComments} {...this.props} />
        </div>
      );
    }
  }
}
