// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of the current state

// a reducer handles the state changes from the actions

// all reducers will run for one action. We need to fix that by adding conditions

// comments will take care of the comment state
// post comments will take care of the indivitual comments
export function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case 'REMOVE_COMMENT':
      // we need to return the new state without the deleted comment
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];
    default:
      return state;
  }
}

export function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}
