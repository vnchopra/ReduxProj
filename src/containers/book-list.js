import React, {Component} from 'react'
import { connect } from 'react-redux'; //bridges react and redux
import { selectBook } from '../actions/index'; //import action creator
import { bindActionCreators } from 'redux'; //helps the action created from
//action generators to flow through all the reducers.

//This is a container.
//A container is a component that has access to the state managed by Redux
//Booklist cares about when the list of books changes.
class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //Takes application state
  //whatever is returned here will show up as props inside of BookList
  return {
    books: state.books
  }
}

//Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, it should be passed to all of the reducers.
  //This happens through bindActionCreators
  //Dispatch passes it to the reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

//Promote a BookList from a component to a container.
//Needs to know about dispatch, selectBook. Make it available as a prop.
export default connect (mapStateToProps, mapDispatchToProps)(BookList);
