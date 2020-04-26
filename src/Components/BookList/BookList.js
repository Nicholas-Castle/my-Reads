import React, { Component } from "react";
import "./BookList.css";
import FrontBookCard from "./../BookCardFront/FrontBookCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { throttle, debounce } from 'throttle-debounce';
import * as API from "./../../util/BooksAPI";
import { object } from "prop-types";

class BookList extends Component {
  state = {
    books: [],
    searchInput: "",
    
  };
  
 
  updateBooks = () => {
    this.props.update();
  };

  clearSearch = () => {
    this.setState({
      books: [],
      searchInput: ''
     })
  }

  getBooks = () => {
    const specialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    let searchInput = this.state.searchInput;
    console.log(this.state.books)
    if(specialChar.test(searchInput) || !this.state.books) {
      return null
    }else if(searchInput !== ''){
      API.search(searchInput, 20).then(result => {
        this.setState({
          books: result
        })
      })
    }
    
  }
// let shelf = { shelf: "none" };

  onChangeSearchHandler = (event) => {
    this.clearSearch()
    let searchInput = event.target.value;
    this.setState({
      searchInput: searchInput
     }, throttle(300,this.getBooks))
     

  }
  
   

  render() {
    return (
      <div>
        <div className="Search-container">
          <form>
            <button>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <input
              type="search"
              placeholder="Search Books"
              onSubmit={this.search}
              value={this.state.searchInput}
              onChange={this.onChangeSearchHandler}
            ></input>
            <FontAwesomeIcon icon={faSearch} />
          </form>
        </div>
        <div>{this.state.searchInput.length > 0 &&
          <div className="card-list">
          {this.state.searchInput.length > 0 && this.state.books !== null && this.state.books.map((book) => (
            <React.Fragment key={book.id}>
              <FrontBookCard book={!book.imageLinks ? Object.assign(book, {imageLinks: {thumbnail: ''}}) : book
              
              } update={this.updateBooks} />
            </React.Fragment>
          ))}
        </div>
        }
         
        </div>
      </div>
    );
  }
}

export default BookList;
