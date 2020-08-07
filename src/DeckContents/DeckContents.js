import React from 'react';
import DeckContentsItem from '../DeckContentsItem/DeckContentsItem';
import { CARDS_STORE } from '../STORE/cards';
import './DeckContents.css';

export default function DeckContents(props) {
  // if (!props.decks || props.decks.length === 0) {
  //   return (
  //     <div>
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }
  // if (!props.match) {
  //   return (
  //     <div>
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }

  console.log(props);

  const deckID = props.match.params.deckID;
  const deck = props.decks[deckID];

  const deckName = deck.name;

  const deckContents = deck.contents.split(',');

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
