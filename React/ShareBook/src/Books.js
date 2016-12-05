import React, { Component } from 'react';
import { getBooks } from './xhr'
import Book from './Book'
import './App.css';

class Books extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      books: []
    };
  };

  componentDidMount() {
    getBooks().then(results => {
      this.setState({
        books: results.data
      })
      //console.log(this.state.books)
    })
  };

  render(props) {
    return (
      <div className="Books">
        <div className="container">
          <div className="row">
            {
            this.state.books.map(book => {
            return <Book name={book.Name} author={book.Author} cover={book.BookCover} key={book.Id} id={book.Id} />
            })
          }
             
          </div>
        </div>
      </div>
    );
  }
}

export default Books;
