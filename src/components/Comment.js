import React, { Component } from 'react';

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderComment = this.renderComment.bind(this);
  }

  componentDidMount() {
    const { postId } = this.props.match.params;
    const { listOfRandomUsers, listOfPlaces } = this.props;
    console.log(this.props.postComments);
    if (this.props.postComments.length === 0) {
      var i;
      for (i = 0; i < 10; i++) {
        this.props.addComment(postId, listOfRandomUsers[i], listOfPlaces[i]);
      }
    }
  }
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={() => {
              this.props.removeComment(this.props.match.params.postId, i);
            }}
          >
            &times;
          </button>
        </p>
      </div>
    );
  }

  handleSubmit(e) {
    // will prevent the page from refreshing
    e.preventDefault();
    const { postId } = this.props.match.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    // using our addComment reducer now
    this.props.addComment(postId, author, comment);
    // resets the comment field after submitting
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
