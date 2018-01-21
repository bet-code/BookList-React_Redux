import React, { Component } from 'react';

export default class BookList extends Component {

    rederList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}className="list-item">{book.title}</li>
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