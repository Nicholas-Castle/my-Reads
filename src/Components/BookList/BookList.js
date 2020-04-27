import React, { Component } from "react";
import "./BookList.css";
import FrontBookCard from "./../BookCardFront/FrontBookCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { throttle } from "throttle-debounce";
import { Link } from "react-router-dom";
import * as API from "./../../util/BooksAPI";

class BookList extends Component {
  state = {
    books: [],
    searchInput: "",
  };

  updateBooks = () => {
    this.props.update();
  };

  clearSearch() {
    // Clears  state
    this.setState({
      books: [],
      searchInput: "",
    });
  }

  getBooks = () => {
    // Get searched books and
    // checks for errors if the input is empty
    // has special chars or mispellings
    // then sets state with results
    let searchInput = this.state.searchInput;
    if (searchInput !== "") {
      API.search(searchInput, 20).then((result) => {
        if (result.error !== "empty query") {
          this.setState({
            books: result,
          });
        } else {
          this.setState((prevState) => ({
            books: [],
          }));
        }
      });
    }
  };
  

  onChangeSearchHandler = (event) => {
    let searchInput = event.target.value;
    // Throttles typing input so we dont get a 
    // undefined result
    this.setState(
      {
        searchInput: searchInput,
      },
      throttle(300, this.getBooks)
    );
  };

  assignShelf = () => {
    // Checks each book if it has a shelf
    // if not it assigns a chel to the book
    // if the books that are on a shelf id matches
    // the the searched for books assign previous shelf
    // to the search results
    this.state.books.forEach((book) => {
      if (!book.shelf) {
        Object.assign(book, {
          shelf: "none",
        });
      }
      this.props.booksOnShelf.forEach((element) => {
        if (element.id === book.id) {
          Object.assign(book, {
            shelf: element.shelf,
          });
        }
      });
    })
  }

  render() {
    return (
      <div>
        {this.assignShelf()}
        <div className="Search-container">
          <form className="Search-form">
            <Link to="/">
              <button>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </Link>

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
        <div>
          <div className="card-list">
            {this.state.books !== null &&
              this.state.books.map((book) => (
                <React.Fragment key={book.id}>
                  <FrontBookCard
                    book={
                      // Checks if the book has an image then 
                      // assigns an object to the book with an empty image string
                      // eles it returns the book object
                      !book.imageLinks
                        ? Object.assign(book, {
                            imageLinks: { thumbnail: "" },
                          })
                        : book
                    }
                    update={this.updateBooks}
                  />
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default BookList;
