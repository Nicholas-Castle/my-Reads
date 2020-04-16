import React from "react";
import FrontBookCard from "./../BookCardFront/FrontBookCard";
import "./WantToRead.css";

const WantToRead = ( props ) => {
  return (
    <div className='Row-Container'>
      <h1 className='heading'>Want to Read</h1>
      <div className="Want-to-read-container">
        <FrontBookCard books={props.books}/>
      </div>
    </div>
  );
};

export default WantToRead;
