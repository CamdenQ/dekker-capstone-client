import React from 'react';
import './DeckContentsItem.css';

export default function DeckContentsItem(props) {
  let cardColor = '';
  if (!props.card) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (props.card.types.includes('Artifact')) {
    cardColor = 'Silver';
  } else if (props.card.types.includes('Land')) {
    cardColor = 'Brown';
  } else if (props.card.colors.length > 1) {
    cardColor = 'Gold';
  } else {
    cardColor = props.card.colors[0];
  }

  return (
    <div
      className="li-border"
      key={`deck-card-border-${props.card.id}`}
      card_index={props.cardIndex}
      onClick={props.onClick}>
      <li
        className={`deck-card ${cardColor}-card`}
        key={`deck-card-${props.card.id}`}
        card_index={props.cardIndex}>
        {props.card.name}
      </li>
    </div>
  );
}
