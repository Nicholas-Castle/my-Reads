import React from "react";
import FrontBookCard from "./../BookCardFront/FrontBookCard";
import "./Reading.css";

const Reading = (props) => {
  return (
    <div className="Row-Container">
      <h1 className="heading">Currently Reading</h1>
      <div className="currently-reading-container">
        {props.books
          .filter((book) => {
            return book.shelf === "currentlyReading";
          })
          .map((book) => (
            <React.Fragment key={book.id}>
              <FrontBookCard
                title={book.title}
                img={book.imageLinks.thumbnail}
                shelf={book.shelf}
                book={book}
              />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default Reading;