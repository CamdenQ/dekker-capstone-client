import React from 'react';
import './CardsListItem.css';

export default function CardListItem(props) {
  return (
    <div
      className="card-img-container"
      card_id={props.card.id}
      onClick={props.onCardListItemClick}>
      <img
        className="card-img"
        src={props.card.image_url}
        alt={props.card.name}
        card_id={props.card.id}
      />
    </div>
  );
}
