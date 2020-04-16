import React from "react";
import "./BackBookCard.css";
import bookImage from "../../images/bookImg.png";
import ExitMenuBtn from "./../ExitMenuBtn/ExitMenuBtn"

const BackBookCard = ( props ) => {
  return (
    <div>
      <div className="Card-container-back">
      <ExitMenuBtn exitMenu={props.exitMenu} />
        <div className="Fly-out">
        
          <div className="List-content-wrapper">
            <p className="Book-title-back">Creative business startup</p>
            <h3 className="list-heading">Move to...</h3><br />
          </div>

          <form>
            <label className="checkbox-label">
              <input name="radio" type="radio" value="option1" ></input>
              <span className="checkbox-custom"></span>
              Read
            </label>
            <br />
            <label className="checkbox-label">
              <input name="radio" type="radio" value="option2" ></input>
              <span className="checkbox-custom"></span>
              Reading
            </label>
            <br />
            <label className="checkbox-label">
              <input name="radio" type="radio" value="option3"></input>
              <span className="checkbox-custom"></span>
              Want to Read
            </label>
            <br />
            <label className="checkbox-label">
              <input name="radio" type="radio" value="option4"></input>
              <span className="checkbox-custom"></span>
              None
            </label>
          </form>
        </div>
        <div className="Book-Image_Container">
          <div className="FlexContainer">
            <img className="Book-back-img" src={bookImage} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackBookCard;
