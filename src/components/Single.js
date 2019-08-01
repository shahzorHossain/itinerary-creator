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
    Axios.get(`/api/barcelona`)
      .then(res => {
        res.data.map(x => listOfPlaces.push(x.name));
      })
      .catch(error => console.log(error));

    setTimeout(
      function() {
        //Start the timer
        this.setState({ isLoaded: true }); //After 1 second, set render to true
      }.bind(this),
      1000
    );
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
    if (isLoaded === false) {
      return <div className="loader" />;
    } else {
      return (
        <div className="single-photo">
          <Photo post={post} i={i} {...this.props} />
          <Comment
            postComments={postComments}
            listOfPlaces={listOfPlaces}
            {...this.props}
          />
        </div>
      );
    }
  }
}
