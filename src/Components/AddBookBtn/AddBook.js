import React from 'react';
import './AddBookBtn.css';
import AddBookBtn from './../../images/SVG/addBtn.svg';

const AddBook = (props) => {
  return (
  <div className="add-btn-container">
    <button><img className='add-btn' src={AddBookBtn} alt="Add book button" onClick={() => console.log('hi') } /></button>
  </div>
  )
}

export default AddBook;