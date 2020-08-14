import React from 'react';

import CardsListItem from '../CardsListItem/CardsListItem';

import './CardsList.css';

export default function CardsList(props) {
  const cards = props.cards;

  return (
    <div className="database-list-wrapper">
      <section className="database-list">
        {cards.map((card, i) => (
          <CardsListItem card={card} key={`card-${i}`} cardID={i + 1} />
        ))}
      </section>
    </div>
  );
}
