import React, { Component } from 'react';
import { getBook } from './xhr'

class BookDetail extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    	name: null,
	    author: null,
      	cover: null    
   };
  };

  componentDidMount() {
    getBook(this.props.params.id).then(results => {
      this.setState({
        name:results.data.Name,
        author:results.data.Author,
        cover:results.data.BookCover        
      })
    })

  };

  render() {

    return (
    	<div>
    <div className="col-md-3 col-sm-4 col-xs-6">
    	<img className="img-responsive" src={this.state.cover} alt=""></img>
    </div>
    <div >
    	<h2>Book Name: {this.state.name}</h2>
    	<h2>Author Name: {this.state.author}</h2>
    </div>
    </div>
    );
  }
}

export default BookDetail




