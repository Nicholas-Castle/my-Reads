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
  };

  componentDidMount() {
    API.getAll().then((books) =>
      this.setState({
        books,
      })
    );
  }

  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <div className="App-body">
          <div>
          {console.log(this.state.books)}
          <WantToRead books={this.state.books}/>
          <Reading />
          <Read />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
