import React from 'react';
import './Header.css'

const Header = () => {

  return(
    <div className="headerContainer">
      <div className="headerInnerWrap">
        <h1 className="animated fadeInLeft">Kimberly Barreto</h1>
        <ul className="animated fadeIn slow">
          <li>Contact</li>
          <li>About</li>
          <li>FAQ</li>
          <li>Resources</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
