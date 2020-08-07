import React from 'react';
import FilterOptions from '../FilterOptions/FilterOptions';
import DeckContents from '../DeckContents/DeckContents';
import CardsList from '../CardsList/CardsList';
import { Route, Link } from 'react-router-dom';
import './CardsDBView.css';

export default function CardsDBView(props) {
  return (
    <>
      <FilterOptions />
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
        <Route
          path="/cards/:deckID"
          render={() => {
            return <DeckContents decks={props.decks} />;
          }}
        />
        <CardsList />
      </div>
    </>
  );
}
