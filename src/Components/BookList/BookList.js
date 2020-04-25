import React, { Component } from 'react';
import "./BookList.css";
import FrontBookCard from "./../BookCardFront/FrontBookCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import * as API from "../../util/BooksAPI";


class BookList extends Component {
  state= {
    books: [],
    searchInput: ''
  }
  
  search() {
  
}
  
  render() {
 
  return (
    <div>

    <div className="Search-container">
      <form> 
      <button><FontAwesomeIcon icon={faArrowLeft} /></button>
      <input type="search" placeholder="Search Books">
        </input>
        <FontAwesomeIcon icon={faSearch} />  
      </form>
    </div>
    <div >
      <div className="card-list">
      {
        this.state.books.map((book) => (
          book.shelf === 'none' ?
          <React.Fragment key={book.id}>
            <FrontBookCard
              title={book.title}
              img={book.imageLinks.thumbnail}
              shelf={book.shelf}
              book={book}
            />
          </React.Fragment>
          : null
        ))}

     
      </div>
     
    </div>
    </div>
  )
  }
};

export default BookList;
