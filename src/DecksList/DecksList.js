import React from 'react';
import DecksListItem from '../DecksListItem/DecksListItem';

export default function DecksList(props) {
  const decks = props.decks;
  console.log('Decks:');
  console.table(decks);
  console.log(decks);
  return (
    <div class="wrapper">
      <header>
        <h1>Dekker</h1>
      </header>
      <section class="main-section">
        <h2>Decks</h2>
        <ul>
          {decks.map((deck) => {
            return <DecksListItem deckID={deck.id} deckName={deck.title} />;
          })}
        </ul>
        <button>New Deck</button>
      </section>
    </div>
  );
}
