import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
  return (
    <>
      <main className="landing-main">
        <div className="overlay">
          <h1>DEKKER</h1>
          <h3>A Magic: The Gathering Deck Builder</h3>
          <p>
            Dekker allows you to browse the full catalog* of Magic: the
            Gathering playing cards and add them to decks of your own creation.
          </p>
          <p>Click the button below to get started!</p>
          <br />
          <Link to="/cards">
            <button>LET'S GO!</button>
          </Link>
          <p className="fineprint">
            *NYI - catalog currently limited to Guilds of Ravnica block and Core
            Set 2019
          </p>
        </div>
      </main>
      {/* <main className="landing-main"></main> */}
    </>
  );
}
