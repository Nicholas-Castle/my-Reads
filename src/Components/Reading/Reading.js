import React from "react";
import FrontBookCard from "../BookCardFront/FrontBookCard";
import BackBookCard from "../BookCardBack/BackBookCard";
import "./Reading.css";

const Reading = (props) => {
  return (
    <div className='Row-Container'>
      <h1 className='heading'>Reading</h1>
      <div className="Reading-container">
        <FrontBookCard />
        <BackBookCard />
      </div>
    </div>
  );
};

export default Reading;
