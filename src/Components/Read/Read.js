import React from "react";
import FrontBookCard from "../BookCardFront/FrontBookCard";
import BackBookCard from "../BookCardBack/BackBookCard";
import "./Read.css";

const Read = (props) => {
  return (
    <div className='Row-Container'>
      <h1 className='heading'>Read</h1>
      <div className="Read-container">
        <FrontBookCard />
        <BackBookCard />
      </div>
    </div>
  );
};

export default Read;
