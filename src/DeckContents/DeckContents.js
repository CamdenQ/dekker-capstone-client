import React from 'react';
import DeckContentsItem from '../DeckContentsItem/DeckContentsItem';
import { CARDS_STORE } from '../STORE/cards';
import './DeckContents.css';

export default function DeckContents(props) {
  const deckID = props.match.params.deckID;
  console.log(`Deck ID: ${deckID}`);
  const deck = props.decks[deckID];
  console.log(`User Deck: `);
  console.table(props.deck);
  const deckName = deck.name;
  console.log(`Deck Name: ${deckName}`);
  const deckContents = deck.contents;
  console.log('Deck contents:');
  console.table(deckContents);

  return (
    <section className="deck-contents">
      <span className="deck-list-title">{deckName}</span>
      <ul className="deck-list">
        {deckContents.map((cardID, i) => {
          const card = CARDS_STORE[cardID - 1];
          return <DeckContentsItem key={i} card={card} />;
        })}
      </ul>
      <button>Save Deck</button>
    </section>
  );
}
