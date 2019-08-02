import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PhotoGrid from './PhotoGrid';
import Single from './Single';
import { Router, Route } from 'react-router-dom';
import { history } from '../store';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Route
            path="/"
            render={routeProps => (
              <h1>
                <Link to="/">Places to Instagram</Link>
              </h1>
            )}
          />

          <Route
            exact
            path="/"
            render={routeProps => <PhotoGrid {...routeProps} {...this.props} />}
          />

          <Route
            path="/view/:postId"
            render={routeProps => <Single {...routeProps} {...this.props} />}
          />
        </Router>
      </div>
    );
  }
}
