import React from "react";
import FrontBookCard from "./../BookCardFront/FrontBookCard";
import "./Read.css";

const WantToRead = (props) => {
  // call update to update shelf
  const updateBooks = () => {
    props.update();
  };
  
  return (
    <div className="Row-Container">
      <h1 className="heading">Read</h1>
      <div className="read-container">
        {
          // Filters books by read and displays them on the shelf
          // Also adds an empty thumbnail to books that are missing an image
          props.books
            .filter((book) => {
              return book.shelf === "read";
            })
            .map((book) => (
              <React.Fragment key={book.id}>
                <FrontBookCard
                  book={
                    !book.imageLinks
                      ? Object.assign(book, { imageLinks: { thumbnail: "" } })
                      : book
                  }
                  update={updateBooks}
                />
              </React.Fragment>
            ))
        }
      </div>
      <br></br>
    </div>
  );
};

export default WantToRead;
