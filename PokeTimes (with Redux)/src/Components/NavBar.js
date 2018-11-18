import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav>
          <div className="nav-wrapper">
            <div className="container">
              <a href="/" className="brand-logo">Poke'Times</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
    );
}

export default NavBar;