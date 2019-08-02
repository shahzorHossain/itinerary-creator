import React, { Component } from 'react';
import Photo from './Photo';
import Comment from './Comment';
import Axios from 'axios';

var list = [];
var listOfRandomUsers = [];
var firstName = '';
var lastName = '';

export default class Single extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false, listOfPlaces: [] };
  }

  componentDidMount() {
    Axios.get(`/api/barcelona`)
      .then(res => {
        res.data.map(x => list.push(x.name));
        this.setState({ listOfPlaces: list });
      })
      .catch(error => console.log(error));

    Axios.get('/api/extra-usernames').then(res => {
      res.data.map(data => {
        firstName = data.name.toLowerCase();
        lastName = data.surname.toLowerCase();
        listOfRandomUsers.push(firstName.concat(lastName));
      });
    });

    setTimeout(
      function() {
        //Start the timer
        this.setState({ isLoaded: true }); //After 1 second, set render to true
      }.bind(this),
      500
    );
  }

  render() {
    const { isLoaded, listOfPlaces } = this.state;
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
            listOfRandomUsers={listOfRandomUsers}
            {...this.props}
          />
        </div>
      );
    }
  }
}
