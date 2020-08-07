import React from 'react';
import { Route } from 'react-router-dom';

import CardListItem from '../CardListItem/CardListItem';
import { CARDS_STORE } from '../STORE/cards';

import './CardsList.css';

export default function CardsList(props) {
  const CARDS = CARDS_STORE;

  return (
    <div className="database-list-wrapper">
      <section className="database-list">
        <Route
          exact
          path="/cards"
          render={() => {
            return CARDS.map((card, i) => (
              <CardListItem card={card} key={`card-${i}`} />
            ));
          }}
        />
        <Route
          path="/cards/:id"
          render={() => {
            return CARDS.map((card, i) => (
              <CardListItem card={card} key={`card-${i}`} />
            ));
          }}
        />
      </section>
    </div>
  );
}
