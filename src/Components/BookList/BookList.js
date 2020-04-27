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
    this.setState({
      books: [],
      searchInput: "",
    });
  }

  getBooks = () => {
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
  // let shelf = { shelf: "none" };

  onChangeSearchHandler = (event) => {
    let searchInput = event.target.value;

    this.setState(
      {
        searchInput: searchInput,
      },
      throttle(300, this.getBooks)
    );
  };

  render() {
    return (
      <div>
        {this.state.books.forEach((book) => {
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
        })}
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
