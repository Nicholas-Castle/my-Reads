import React, { Component } from "react";
import "./FrontBookCard.css";
import BackBookCard from "../BookCardBack/BackBookCard";
import SpineHamburgerMenu from "../SpineHamburgerMenu/SpineHamburgerMenu";



class FrontBookCard extends Component {
  state = {
    toggleMenu: false,
  };

 
  exitListMenuHandler = () => {
    this.setState({ toggleMenu: false });
  };

  hamburgerMenuBtn = () => {
    this.setState({ toggleMenu: true });
  };

  render() {
    const { title, img, shelf} = this.props;
    
    return (
      <div>

        <div className="Card-container-front">
          {this.state.toggleMenu === false ? (
            <div className="Card-container-front">
              <div className="Spine">
                <SpineHamburgerMenu hamburgerMenuBtn={this.hamburgerMenuBtn} />
                <p className="Book-title">{title}</p>
              </div>
              <div className="Book-Image_Container">
                <img className="Book-front-img" src={img} alt="Logo" />
              </div>
            </div>
          ) : (
            <React.Fragment>
              <BackBookCard
                bookTitle={title}
                bookImage={img}
                exitListMenuHandler={this.exitListMenuHandler}
                shelf={shelf}
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
