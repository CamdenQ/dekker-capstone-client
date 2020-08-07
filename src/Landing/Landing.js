import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <main className="landing-main">
      <div class="wrapper">
        <section class="main-section">
          <p>Dekker is a Magic: the Gathering deck builder</p>
          <p>Click the button below to get started</p>
          <Link to="">
            <button>Try it out!</button>
          </Link>
        </section>
      </div>
    </main>
  );
}
