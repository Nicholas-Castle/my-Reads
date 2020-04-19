import React, { Component } from "react";
import Header from "./Components/Header/Header";
import WantToRead from "./Components/WantToRead/WantToRead";
import Reading from "./Components/Reading/Reading";
import Read from "./Components/Read/Read";
import * as API from "./util/BooksAPI";
import "./App.css";

class App extends Component {
  state = {
    books: [],
    isLoaded: false,
    error: null,
  };

  componentDidMount() {
    console.log();
    API.getAll().then(
      (result) => {
        this.setState({
          books: result,
          isLoaded: true,
        });
      },
      (error) => {
        this.setState({
          isLoaded: false,
          error,
        });
      }
    );
  }

  getBooks = () => {
    return this.state.books;
  };

  render() {
    const { books, error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return null;
    } else {
      return (
        <div className="App">
          <header>
            <Header />
          </header>
          <div className="App-body">
            <div>
              <WantToRead books={books} />
            </div>
            <div>
            <WantToRead books={books} />
          </div>
          <div>
          <WantToRead books={books} />
        </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
