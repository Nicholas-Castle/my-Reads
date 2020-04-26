import React from "react";
import FrontBookCard from "./../BookCardFront/FrontBookCard";
import "./Read.css";

const WantToRead = (props) => {
  const updateBooks = () => {
    props.update();
  }
  return (
    <div className="Row-Container">
      <h1 className="heading">Read</h1>
      <div className="read-container">
        {props.books
          .filter((book) => {
            return book.shelf === "read";
          })
          .map((book) => (
            <React.Fragment key={book.id}>
            <FrontBookCard
              book={book}
              update={updateBooks}
            />
          </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default WantToRead;
