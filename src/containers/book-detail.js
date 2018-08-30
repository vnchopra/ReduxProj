import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {

    if (!this.props.book) {
      return <div>Please select a book!</div>
    }

    return (
      <div>
        <h3> Book Title Is: </h3>
        {this.props.book.title}
        <br />
        {this.props.book.pages}
      </div>
    );
  }
}

function mapStateToProps(state) {
  //the key book here is what would be used to render in the
  //render function for this BookDetail container
  return {
    book: state.activeBook
  }
  //where activeBook comes frmo reducers->index.js
}

export default connect(mapStateToProps)(BookDetail);
