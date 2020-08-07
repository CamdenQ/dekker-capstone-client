import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="left-nav nav-box">
          <Link to="/decks">Decks</Link>
        </div>
        <div className="right-nav nav-box">
          <Link to="/cards">Home</Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
