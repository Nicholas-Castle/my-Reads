import React, { Component } from "react";
import "./FrontBookCard.css";
import BackBookCard from "../BookCardBack/BackBookCard";
import SpineHamburgerMenu from "../SpineHamburgerMenu/SpineHamburgerMenu";

class FrontBookCard extends Component {
  state = {
    toggleMenu: false,
  };

  exitListMenuHandler = (e) => {
    e.preventDefault();
    this.setState((state) => {
      return { toggleMenu: (state.toggleMenu = false) };
    }, this.props.update);
  };

  hamburgerMenuBtn = (e) => {
    e.preventDefault();
    this.setState((state) => {
      return { toggleMenu: (state.toggleMenu = true) };
    });
  };

  render() {
    return (
      <div>
        <div className="Card-container-front">
          {this.state.toggleMenu === false ? (
            <div className="Card-container-front">
              <div className="Spine">
                <SpineHamburgerMenu hamburgerMenuBtn={this.hamburgerMenuBtn} />
                <p className="Book-title">{this.props.book.title}</p>
              </div>
              <div className="Book-Image_Container">
                <img
                  className="Book-front-img"
                  src={this.props.book.imageLinks.thumbnail === undefined ? this.props.book.imageLinks.thumbnail : null}
                  alt="Logo"
                />
              </div>
            </div>
          ) : (
            <React.Fragment>
              <BackBookCard
                exitListMenuHandler={this.exitListMenuHandler}
                book={this.props.book}
              />
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default FrontBookCard;
