import React, { Component } from 'react';
import Photo from './Photo';

export default class PhotoGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
  }
  componentDidMount() {
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
    if (isLoaded === false) {
      return <div className="loader" />;
    } else {
      return (
        <div className="photo-grid">
          {this.props.posts.map((post, i) => (
            <Photo {...this.props} key={i} i={i} post={post} />
          ))}
        </div>
      );
    }
  }
}

// {...this.props} passes down all the props so that the component can use them
