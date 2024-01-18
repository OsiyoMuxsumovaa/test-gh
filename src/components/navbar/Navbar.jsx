import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../asset/logo.png";


function Navbar() {

  const Menu = () => (
    <>
      <p>
        <a href="#">Home</a>
      </p>
      <p>
        <a href="#about">About</a>
      </p>
      <p>
        <a href="#brain">Services</a>
      </p>
      <p>
        <a href="#features">Projects</a>
      </p>
      <p>
        <a href="#blog">Contacts</a>
      </p>
    </>
  );

  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>

      {/***mobile navbar***/}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gtp3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type="button">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;