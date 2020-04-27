import React, { Component } from "react";
import Header from "./Components/Header/Header";
import WantToRead from "./Components/WantToRead/WantToRead";
import Reading from "./Components/Reading/Reading";
import Read from "./Components/Read/Read";
import BookList from "./Components/BookList/BookList";
import { Route } from "react-router-dom";
import * as API from "./util/BooksAPI";
import "./App.css";

class App extends Component {
  state = {
    books: [],
    isLoaded: false,
    error: null,
  };

  componentDidMount() {
    // Calls API to get all books on shelfs
    API.getAll().then((result) =>
      this.setState({
        books: result,
        isLoaded: true,
      })
    );
  }

  onChangeShelf = () => {
    // Updates home page based on the the books shelf change
    API.getAll().then((result) =>
      this.setState({
        books: result,
        isLoaded: true,
      })
    );
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div className="App">
              <header>
                <Header />
              </header>
              <div className="App-body">
                <div>
                  <WantToRead
                    books={this.state.books}
                    update={this.onChangeShelf}
                  />
                </div>
                <div>
                  <Reading
                    books={this.state.books}
                    update={this.onChangeShelf}
                  />
                </div>
                <div>
                  <Read books={this.state.books} update={this.onChangeShelf} />
                </div>
              </div>
              <footer className="footer"></footer>
              </div>
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <BookList
              booksOnShelf={this.state.books}
              update={this.onChangeShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
