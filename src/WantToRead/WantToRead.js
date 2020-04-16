import React from "react";
import FrontBookCard from "./../BookCardFront/FrontBookCard";
import BackBookCard from "./../BookCardBack/BackBookCard";
import "./WantToRead.css";

const WantToRead = (props) => {
  return (
    <div className='Row-Container'>
      <h1 className='heading'>Want to Read</h1>
      <div className="Want-to-read-container">
        <FrontBookCard />
        <BackBookCard />
      </div>
    </div>
  );
};

export default WantToRead;
