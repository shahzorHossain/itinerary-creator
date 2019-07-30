import React, { Component } from 'react';
import Photo from './Photo';
// import Amadeus from 'amadeus';
// import { API_KEY, API_SECRET } from '../keys/keys';

// var amadeus = new Amadeus({
//   clientId: API_KEY,
//   clientSecret: API_SECRET
// });

export default class PhotoGrid extends Component {
  componentDidMount() {
    //will need to move this into indivitual pages
    // amadeus.referenceData.locations
    //   .get({
    //     keyword: 'sev',
    //     subType: Amadeus.location.city
    //   })
    //   .then(function(response) {
    //     console.log(response.result);
    //   })
    //   .catch(function(error) {
    //     console.log(error.response);
    // });
  }
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => (
          <Photo {...this.props} key={i} i={i} post={post} />
        ))}
      </div>
    );
  }
}

// {...this.props} passes down all the props so that the component can use them
