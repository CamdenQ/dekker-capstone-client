import React from 'react';
import DecksListItem from '../DecksListItem/DecksListItem';
import NewDeckForm from '../NewDeckForm/NewDeckForm';
import './DecksList.css';
import Nav from '../Nav/Nav';

export default function DecksList(props) {
  const decks = props.decks;
  return (
    <>
      <Nav />
      <header>
        <h1>DEKKER</h1>
        <p>An MTG Deck Builder</p>
      </header>
      <main>
        <section className="decks-list">
          <h2>Decks</h2>
          <NewDeckForm
            onClick={props.onClickNewDeck}
            onSubmit={props.onSubmitNewDeck}
            namingDeck={props.namingDeck}
            onCancel={props.onCancelNewDeck}
          />
          <ul>
            {decks.map((deck) => {
              return (
                <DecksListItem
                  deckID={deck.id}
                  deckName={deck.title}
                  onClickDelete={props.onClickDelete}
                  key={`deck-list-item-${deck.id}`}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
