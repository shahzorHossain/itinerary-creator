import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

// connect helps us pass down props from one level to another

// mapStateToProps matches the props to the current state
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
    temporary_prop: state.temporary_prop
  };
}

// mapDispatchToProps will attach our actions to the props

function mapDispatchtoProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// The App component should provide all the props and current state to the Main component
const App = connect(
  mapStateToProps,
  mapDispatchtoProps
)(Main);

export default App;
