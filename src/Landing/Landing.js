import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
  return (
    <>
      <main className="landing-main">
        <div className="overlay">
          <h1>DEKKER</h1>
          <h3>
            A <i>Magic: the Gathering</i> Deck Builder
          </h3>
          <p>
            Dekker allows you to browse the full catalog* of{' '}
            <i>Magic: the Gathering</i> playing cards and add them to decks of
            your own creation.
          </p>
          <p>Click the button below to get started!</p>
          <br />
          <Link to="/cards">
            <button className="landing-button">LET'S GO!</button>
          </Link>
          <p className="fineprint">
            *NYI - catalog currently limited to Guilds of Ravnica pseudo-block
            and Core Set 2020
          </p>
        </div>
      </main>
    </>
  );
}
