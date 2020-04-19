import React from "react";
import "./BackBookCard.css";
import ExitMenuBtn from "./../ExitMenuBtn/ExitMenuBtn";

const BackBookCard = (props) => {
  return (
    <div>
      <div className="Card-container-back">
        <ExitMenuBtn exitMenu={props.exitListMenuHandler} />
        <div className="Fly-out">
          <div className="List-content-wrapper">
            <p className="Book-title-back">
              {props.bookTitle.length > 14
                ? props.bookTitle.slice(0, 10) + "..."
                : props.bookTitle}
            </p>
            <h3 className="list-heading">Move to...</h3>
            <br />
          </div>
          <form>
            <label className="checkbox-label">
              <input name="radio" type="radio" value="Read"></input>
              <span className="checkbox-custom"></span>
              Read
            </label>
            <br />
            <label className="checkbox-label">
              <input name="radio" type="radio" value="Reading"></input>
              <span className="checkbox-custom"></span>
              Reading
            </label>
            <br />
            <label className="checkbox-label">
              <input name="radio" type="radio" value="Want-to-Read"></input>
              <span className="checkbox-custom"></span>
              Want to Read
            </label>
            <br />
            <label className="checkbox-label">
              <input name="radio" type="radio" value="None"></input>
              <span className="checkbox-custom"></span>
              None
            </label>
          </form>
        </div>
        <div className="Book-Image_Container">
          <div className="FlexContainer">
            <img className="Book-back-img" src={props.bookImage} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackBookCard;
