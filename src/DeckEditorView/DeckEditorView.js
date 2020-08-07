import React from 'react';
import FilterOptions from '../FilterOptions/FilterOptions';
import DeckContents from '../DeckContents/DeckContents';
import CardsList from '../CardsList/CardsList';
import { Route, Link } from 'react-router-dom';
import './DeckEditorView.css';

export default function CardsDBView(props) {
  const deckID = props.match.params.deckID,
    deck = props.decks[deckID],
    cards = props.cards;

  return (
    <>
      <FilterOptions onChange={props.onChange} />
      <Route
        exact
        path="/cards"
        render={() => {
          return (
            <button>
              <Link to="">New Deck</Link>
            </button>
          );
        }}
      />
      <div className="cards-sections flex row">
        <DeckContents deck={deck} cards={cards} />
        <CardsList cards={props.cards} />
      </div>
    </>
  );
}
