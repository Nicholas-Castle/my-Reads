import React from "react";
import "./ExitMenuBtn.css";
import ExitMenuImg from "./../../images/SVG/FlyOutExitBtn.svg";

const ExitMenuBtn = (props) => {
  return (
    <div className="exit-btn-container">
      <button>
        <img
          className="exit-btn"
          src={ExitMenuImg}
          alt="Exit list button"
          onClick={props.exitMenu}
        />
      </button>
    </div>
  );
};

export default ExitMenuBtn;
