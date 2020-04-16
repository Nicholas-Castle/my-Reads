import React from "react";
import './SpineHamburgerMenu.css';

const SpineHamburgerMenu = ( props ) => {
  return (
    <div className='Card-menu-container'>
      <button className='Card-menu' onClick={props.hamburgerMenuBtn}>
      <div className='menuLine'></div>
      <div className='menuLine'></div>
      <div className='menuLine'></div>
      </button>
    </div>
  )
}

export default SpineHamburgerMenu;