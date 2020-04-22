import React, { Component } from "react";
import "./BackBookCard.css";
import ExitMenuBtn from "./../ExitMenuBtn/ExitMenuBtn";
import * as API from "./../../util/BooksAPI";

class BackBookCard extends Component {
  state = {
    bookStatus: "",
  };

  handleRadioChange = (e) => {
    console.log(e.target.value);
    this.setState({
      bookStatus: e.target.value,
    });
  };

  update = () => {
    const shelf = this.state.bookStatus;
    API.update(this.props.book, shelf).catch((err) => console.warn(err));
  };

  componentDidUpdate() {
    this.update();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div className="Card-container-back">
          <ExitMenuBtn exitMenu={this.props.exitListMenuHandler} />
          <div className="Fly-out">
            <div className="List-content-wrapper">
              <p className="Book-title-back">
                {this.props.bookTitle.length > 14
                  ? this.props.bookTitle.slice(0, 10) + "..."
                  : this.props.bookTitle}
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
                  defaultChecked={this.props.shelf === "read"}
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
                  defaultChecked={this.props.shelf === "currentlyReading"}
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
                  defaultChecked={this.props.shelf === "wantToRead"}
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
                  defaultChecked={this.props.shelf === "none"}
                  onChange={this.handleRadioChange}
                ></input>
                <span className="checkbox-custom"></span>
                None
              </label>
            </form>
          </div>
          <div className="Book-Image_Container">
            <div className="FlexContainer">
              <img
                className="Book-back-img"
                src={this.props.bookImage}
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
