import React from 'react';

import './Header.css';

export default function Header() {
  return (
    <>
      <header className="non-landing-header">
        <div className="overlay">
          <h1>DEKKER</h1>
          <p>An MTG Deck Builder</p>
        </div>
      </header>
    </>
  );
}
