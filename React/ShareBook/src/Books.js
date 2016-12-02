import React, { Component } from 'react';
import HeaderNavigation from './HeaderNavigation';
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
      console.log(this.state.books)
    })
  };

  render() {
    return (
      <div className="Books">
        <HeaderNavigation />
        <div className="container">
          <div className="row">
            {
            this.state.books.map(book => {
              console.log(book)
            return <Book name={book} author="AUTHOR"id={1} />
            })
          }
             
          </div>
        </div>
      </div>
    );
  }
}

export default Books;
