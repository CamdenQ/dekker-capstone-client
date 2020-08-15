import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div
      className="card-img-container"
      card_id={props.card.id}
      onClick={props.onCardClick}>
      <img
        className="card-img"
        src={props.card.image_url}
        alt={props.card.name}
        card_id={props.card.id}
      />
    </div>
  );
}
