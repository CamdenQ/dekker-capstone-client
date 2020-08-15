import React from 'react';

import Card from '../Card/Card';

import './CardsList.css';

export default function CardsList(props) {
  const cards = props.cards;

  return (
    <div className="database-list-wrapper">
      <section className="database-list">
        {cards.map((card, i) => (
          <Card card={card} key={`card-${i}`} cardID={i + 1} />
        ))}
      </section>
    </div>
  );
}
