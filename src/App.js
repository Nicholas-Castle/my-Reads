import React, { Component } from "react";
import Header from "./Components/Header/Header";
import WantToRead from "./Components/WantToRead/WantToRead";
import Reading from "./Components/Reading/Reading";
import Read from "./Components/Read/Read";
import BookList from "./Components/BookList/BookList";
import { Route } from "react-router-dom";
import * as API from "./util/BooksAPI";
import "./App.css";
import BackBookCard from "./Components/BookCardBack/BackBookCard";

class App extends Component {
  state = {
    books: [],
    isLoaded: false,
    error: null,
  };

  componentDidMount() {
    API.getAll().then((result) =>
      this.setState(
        {
          books: result,
          isLoaded: true,
        },
        () => this.state.books
      )
    );
  };

/*   updateShelf = () => {
    const shelf = this.state.bookStatus;
    API.update(this.props.book, shelf)
    .then((result) =>
      this.setState(
        {
          books: result,
          isLoaded: true,
        },
        () => this.state.books
      )
    )
    .catch((err) => console.warn(err));
  }; */

  
  onChangeShelf = () => {
  let newBooks = API.getAll().then(result => result)
   this.setState((prevState)=>{
    return { books: prevState.books = newBooks }
   }, () => this.state.books);
  };

    componentDidUpdate(prevProps,prevState){
      const newBooks = API.getAll().then((result) => result[0].title)
      console.log(prevState)
      console.log(newBooks)
      if(newBooks !== this.state.books[0].title){
        console.log(true)
      }
      
      
      
    
    }


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
                  <WantToRead books={this.state.books} update={this.onChangeShelf}/>
                </div>
                <div>
                  <Reading books={this.state.books} />
                </div>
                <div>
                  <Read books={this.state.books} />
                </div>
              </div>
            </div>
          )}
        />
        <Route
          exact
          path="/search"
          render={() => <BookList book={this.state.books} />}
        />
      </div>
    );
  }
}

export default App;
