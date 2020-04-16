import React from 'react';
import Logo from './../../images/SVG/logo.svg';
import AddBook from '../AddBookBtn/AddBook';
import './Header.css';

const Header = (props) => {
  
  return (
    <div className="Header-container">
      <div className="logo-lockup">
        <img className='logo' src={Logo} alt='Logo' />
        <h1 className='title'>My Reads</h1>
        
      </div>
      <div>
        <AddBook />
      </div>
    </div>
  )
}

export default Header;