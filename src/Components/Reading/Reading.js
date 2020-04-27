import React from "react";
import FrontBookCard from "./../BookCardFront/FrontBookCard";
import "./Reading.css";

const Reading = (props) => {
  const updateBooks = () => {
    props.update();
  }
  
  return (
    <div className="Row-Container">
      <h1 className="heading">Currently Reading</h1>
      <div className="currently-reading-container">
        {
          // Filters books by currentlyReading and displays them on the shelf
          // Also adds an empty thumbnail to books that are missing an image
          props.books
          .filter((book) => {
            return book.shelf === "currentlyReading";
          })
          .map((book) => (
            <React.Fragment key={book.id}>
              <FrontBookCard
                book={!book.imageLinks ? Object.assign(book, {imageLinks: {thumbnail: ''}}) : book}
                update={updateBooks}
              />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default Reading;