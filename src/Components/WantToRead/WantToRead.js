import React from "react";
import FrontBookCard from "./../BookCardFront/FrontBookCard";
import "./WantToRead.css";

const WantToRead = (props) => {
  return (
    <div className="Row-Container">
      <h1 className="heading">Want to Read</h1>
      <div className="Want-to-read-container">
        {props.books.map((book) => (
          <React.Fragment key={book.id}>
            <FrontBookCard 
              title={book.title} 
              img={book.imageLinks.thumbnail} 
              shelf={book.shelf} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WantToRead;
