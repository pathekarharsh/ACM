import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <img src={logo} />
        </div>
        <div className="navbar-links-container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#team">Team</a></p>
          <p><a href="https://backend.infotrek24.tech/public/pdfs/rulebook.pdf" target="_blank">Rulebook</a></p>
        </div>
      </div>
      <div className="navbar-sign">
        <p>Log in</p>
        <button type="button">Signup</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu-container scale-up-center">
          <div className="navbar-menu-container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#team">Team</a></p>
          <p><a href="https://backend.infotrek24.tech/public/pdfs/rulebook.pdf" target="_blank">Rulebook</a></p>
          </div>
          <div className="navbar-menu-sign">
            <p>Sign in</p>
            <button type="button">Sign Up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;