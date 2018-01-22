import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render () {
        if (!this.props.book) {
            return <div>Select a book to get started.</div>
        }

        return (
            <div>
                <h3>Book Detail:</h3>
                <div>
                    <h1>Title: {this.props.book.title}</h1>
                    <p>Number of pages: {this.props.book.pages}</p>
                
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);