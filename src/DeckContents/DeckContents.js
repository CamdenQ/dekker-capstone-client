import React from 'react';
import DeckContentsItem from '../DeckContentsItem/DeckContentsItem';
import './DeckContents.css';

export default function DeckContents(props) {
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
        <h2 className="deck-list-title">{props.deck.title}</h2>
        <button
          className="deck-contents-save fa fa-floppy-o"
          onClick={props.onClickSave}></button>
        <button
          className="deck-contents-delete fa fa-trash-o"
          onClick={props.onClickDelete}></button>
        <p>Welcome to your new deck!</p>
        <p>It's empty right now, but you can change that!</p>
        <p>Click a card from the list on the right to add it to your deck.</p>
        {/* prettier-ignore */}
        <p>If you change your mind, you can click the card in this list to remove it!</p>
        <p>
          You can press the <span className="fa fa-floppy-o" /> above to save
          your deck, or you can press the <span className="fa fa-trash-o" /> to
          delete it.
        </p>
        <p>
          Either action (saving or deleting the deck) will return you to the
          list of decks.
        </p>
        <p>Warning: deleting your deck cannot be reversed!</p>
      </section>
    );
  }

  return (
    <section className="deck-contents">
      <h2 className="deck-list-title">{props.deck.title}</h2>
      <button
        className="deck-contents-save fa fa-floppy-o"
        onClick={props.onClickSave}></button>
      <button
        className="deck-contents-delete fa fa-trash-o"
        onClick={props.onClickDelete}></button>
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
      <p>Click any card in this list to remove it!</p>
      <p>
        You can press the <span className="fa fa-floppy-o" /> above to save your
        deck, or you can press the <span className="fa fa-trash-o" /> to delete
        it.
      </p>
      <p>
        Either action (saving or deleting the deck) will return you to the list
        of decks.
      </p>
      <p>Warning: deleting your deck cannot be reversed!</p>
    </section>
  );
}
