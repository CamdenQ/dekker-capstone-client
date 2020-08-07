import React from 'react';

export default function DeckContentsItem(props) {
  return (
    <li className="deck-card" key={`deck-card-{props.key}`}>
      {props.card.name}
    </li>
  );
}
