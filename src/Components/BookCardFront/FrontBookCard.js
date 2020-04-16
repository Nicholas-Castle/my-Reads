import React, { Component } from "react";
import "./FrontBookCard.css";
import BackBookCard from "../BookCardBack/BackBookCard";
import SpineHamburgerMenu from "../SpineHamburgerMenu/SpineHamburgerMenu";

class FrontBookCard extends Component {
  state = {
    toggleMenu: false,
  };

  exitListMenuHandler = () => {
    console.log(this.state.toggleMenu);
    this.setState((prevState) => {
      return { toggleMenu: (prevState.toggleMenu = false) };
    });
    console.log(this.state.toggleMenu);
  };

  hamburgerMenuBtn = () => {
    this.setState((prevState) => {
      return { toggleMenu: (prevState.toggleMenu = true) };
    });
    console.log(this.state.toggleMenu);
  };

  render() {
    return (
      <div>
        {this.props.books &&
          this.props.books.map((book) => (
            <div className="Card-container-front">
              {this.state.toggleMenu === false ? (
                <React.Fragment>
                  <div className="Card-container-front">
                    <div className="Spine">
                      <SpineHamburgerMenu
                        hamburgerMenuBtn={this.hamburgerMenuBtn}
                      />
                      <p className="Book-title">{book.title}</p>
                    </div>
                    <div className="Book-Image_Container">
                      <img
                        className="Book-front-img"
                        src={book.imageLinks.thumbnail}
                        alt="Logo"
                      />
                    </div>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <BackBookCard exitMenu={this.exitListMenuHandler} />
                </React.Fragment>
              )}
            </div>
          ))}
      </div>
    );
  }
}

export default FrontBookCard;
