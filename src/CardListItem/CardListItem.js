import React from 'react';

export default function CardListItem(props) {
  return (
    <div className="card-img-container">
      <img
        className="card-img"
        src={props.card.imageUrl}
        alt={props.card.name}
      />
    </div>
  );
}
