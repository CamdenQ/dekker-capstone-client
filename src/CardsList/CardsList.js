import React from 'react';
import { Route } from 'react-router-dom';

import CardListItem from '../CardListItem/CardListItem';

import './CardsList.css';

export default function CardsList(props) {
  const cards = props.cards;

  return (
    <div className="database-list-wrapper">
      <section className="database-list">
        <Route
          exact
          path="/cards"
          render={() => {
            return cards.map((card, i) => (
              <CardListItem card={card} key={`card-${i}`} />
            ));
          }}
        />
        <Route
          path="/cards/:id"
          render={() => {
            return cards.map((card, i) => (
              <CardListItem card={card} key={`card-${i}`} />
            ));
          }}
        />
      </section>
    </div>
  );
}
