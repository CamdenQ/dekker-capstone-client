import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-box">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-box">
          <Link to="/cards">Cards</Link>
        </div>
        <div className="nav-box">
          <Link to="/decks">Decks</Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
