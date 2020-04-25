import React from "react";
import FrontBookCard from "./../BookCardFront/FrontBookCard";
import "./WantToRead.css";

const WantToRead = (props) => {
  const { books, update} = props
 
  return (
    <div className="Row-Container">
      <h1 className="heading">Want to Read</h1>
      <div className="Want-to-read-container">
        {books
          .filter((book) => {
            return book.shelf === "wantToRead";
          })
          .map((book) => (
            <React.Fragment key={book.id}>
              <FrontBookCard
                book={book}
                update={props.update}
              />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default WantToRead;
