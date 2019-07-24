// increment
export function increment(index) {
  // returns the payload (should be very simple, not detailed)
  return {
    type: 'INCREMENT_LIKES', // identifier in the redux dev tools
    index: index // index of the post
  };
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId: postId,
    author: author,
    comment: comment
  };
}

// remove comment
export function removeComment(postId, i) {
  // i = index of comment
  return {
    type: 'REMOVE_COMMENT',
    i: i,
    postId: postId
  };
}
