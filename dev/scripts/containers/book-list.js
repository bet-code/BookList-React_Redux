import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}
                onClick={() => this.props.selectBook(book)} 
                className="list-item">
                {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderList()} 
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned willl show up as props inside of BooksList
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    //  Whenever selectBook is called, the resuld should be passed to all of our reducers
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch)
}

// Promote BookList from component to container - it needs to know about this new dispatch methos, selectBook.  Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);