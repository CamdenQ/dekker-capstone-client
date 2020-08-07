import React from 'react';
import FilterOptions from '../FilterOptions/FilterOptions';
import DeckContents from '../DeckContents/DeckContents';
import CardsList from '../CardsList/CardsList';
import { Route, Link } from 'react-router-dom';
import './CardsDBView.css';

export default function CardsDBView(props) {
  return (
    <>
      <FilterOptions onChange={props.onChange} />
      <Link to="">New Deck</Link>
      <div className="cards-sections flex row">
        <CardsList cards={props.cards} />
      </div>
    </>
  );
}
