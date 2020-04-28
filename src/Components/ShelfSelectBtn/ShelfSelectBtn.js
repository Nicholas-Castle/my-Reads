import React from "react";
import "./shelfSelectBtn.css";

const shelfSelectBtn = (props) => {
  return (
    <div>
      <button className="submit-btn">
        <p
          className="shelf-select-btn"
          onClick={props.exitMenu}
        >
        Sumbit
        </p>
      </button>
    </div>
  );
};

export default shelfSelectBtn;
