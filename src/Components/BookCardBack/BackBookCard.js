import React, { Component } from "react";
import "./BackBookCard.css";
import ExitMenuBtn from "./../ExitMenuBtn/ExitMenuBtn";
import ShelfSelectBtn from "../ShelfSelectBtn/ShelfSelectBtn";

import * as API from "./../../util/BooksAPI";

class BackBookCard extends Component {
  state = {
    bookStatus: "",
  };

  handleRadioChange = (e) => {
    // Set the books shelf status based on which radio button is clicked
    this.setState(
      {
        bookStatus: e.target.value,
      },
      this.updateShelf
    );
  };

  updateShelf = () => {
    // Updates the API based on the new book Shelf
    const shelf = this.state.bookStatus;
    API.update(this.props.book, shelf);
  };

  render() {
    return (
      <div>
        <div className="Card-container-back">
          <ExitMenuBtn exitMenu={this.props.exitListMenuHandler} />
    
    
          <div className="Fly-out">
            <div className="List-content-wrapper">
              <p className="Book-title-back">
                {
                  // Checks The lenght of the book title and adds the dots to the end
                  this.props.book.title.length > 14
                  ? this.props.book.title.slice(0, 10) + "..."
                  : this.props.book.title
                }
              </p>
              <h3 className="list-heading">Move to...</h3>
              <br />
            </div>
            <form>
              <label className="checkbox-label">
                <input
                  name="radio"
                  type="radio"
                  value="read"
                  defaultChecked={this.props.book.shelf === "read"}
                  onChange={this.handleRadioChange}
                ></input>
                <span className="checkbox-custom"></span>
                Read
              </label>
              <br />
              <label className="checkbox-label">
                <input
                  name="radio"
                  type="radio"
                  value="currentlyReading"
                  defaultChecked={this.props.book.shelf === "currentlyReading"}
                  onChange={this.handleRadioChange}
                ></input>
                <span className="checkbox-custom"></span>
                Reading
              </label>
              <br />
              <label className="checkbox-label">
                <input
                  name="radio"
                  type="radio"
                  value="wantToRead"
                  defaultChecked={this.props.book.shelf === "wantToRead"}
                  onChange={this.handleRadioChange}
                ></input>
                <span className="checkbox-custom"></span>
                Want to Read
              </label>
              <br />
              <label className="checkbox-label">
                <input
                  name="radio"
                  type="radio"
                  value="none"
                  defaultChecked={this.props.book.shelf === "none"}
                  onChange={this.handleRadioChange}
                ></input>
                <span className="checkbox-custom"></span>
                None
              </label>
              {
                this.state.bookStatus 
                ? <ShelfSelectBtn exitMenu={this.props.exitListMenuHandler} />
                : null
              }
            </form>
           
          </div>
    
          <div className="Book-Image_Container">
            <div className="FlexContainer">
              <img
                className="Book-back-img"
                src={this.props.book.imageLinks.thumbnail}
                alt="Logo"
              />
            </div>
          </div>
         
        </div>
      </div>
    );
  }
}

export default BackBookCard;
