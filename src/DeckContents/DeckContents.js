import React from 'react';
import DeckContentsItem from '../DeckContentsItem/DeckContentsItem';
import './DeckContents.css';

export default function DeckContents(props) {
  const { deck } = props;

  console.log('Deck passed DeckContents component as prop:');
  console.table(deck);

  const deckID = Number(props.deckID);

  console.log(`Deck ID in DeckContents: ${deckID}`);

  if (!props.deck || !props.deck.id) {
    return (
      <section className="deck-contents">
        <p>Loading...</p>
      </section>
    );
  }

  if (props.selected.length === 0) {
    return (
      <section className="deck-contents">
        <h2 className="deck-list-title">{props.deckName}</h2>
        <p>Click a card from the list on the right to add it to your deck!</p>
        {/* prettier-ignore */}
        <p>If you change your mind, you can click the card in this list to remove it!</p>
      </section>
    );
  }

  return (
    <section className="deck-contents">
      <h2 className="deck-list-title">{props.deckName}</h2>
      <button className="deck-contents-save" onClick={props.onClickSave}>
        Save Deck
      </button>
      <button className="deck-contents-delete" onClick={props.onClickDelete}>
        Delete Deck
      </button>
      <ul className="deck-list">
        {props.selected.map((cardID, i) => {
          const card = props.cards[cardID - 1];
          return (
            <DeckContentsItem
              key={i}
              card={card}
              cardIndex={i}
              onClick={props.onDeckContentsItemClick}
            />
          );
        })}
      </ul>
    </section>
  );
}
