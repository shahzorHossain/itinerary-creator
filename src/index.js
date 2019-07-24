// import react
import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import Components
import App from './components/App';

// import react router deps
import { Provider } from 'react-redux';
import store from './store';

// import Sentry
// import { sentry_url } from './data/config';
// import * as Sentry from '@sentry/browser';

/* 
 * if it matches '/' grab the Main component

 * depending on the url structure, if it still remains '/', display
      photogrid (child of main) 

 * depending on the url structure, if it remains '/view/iurijbcnekkh4hr'
      or any url with an id, display single (child of main) 

 * indexRoute is used when we want a default child as the component when no other route matches
      */

/*
 * The provider tag is used to display it on React Dev tools
 * Click on the tag, go to console, write $r.store to see the methods
 * If you write $r.store.getState(), you will see the state objects
 */

// Sentry.init({
//   dsn: sentry_url
// });

// Sentry.configureScope(scope => {
//   scope.setTag('state', 'rjeghjkrnkve');
//   scope.setTag('data', '4534');
//   // Sentry.captureException(new Error('download failed again!'));
//   // Sentry.captureMessage('Something bad happened!');
//   // Sentry.showReportDialog();
// });

// console.log(window.user.uselessFunction);
// const router = (
//   <Provider store={store}>
//     <Router history={history}>
//       <App>
//         <Switch>
//           <Route exact path="/" component={PhotoGrid} />
//           <Route path="/view/:postId" component={Single} />
//         </Switch>
//       </App>
//     </Router>
//   </Provider>
// );
const router = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(router, document.getElementById('root'));
