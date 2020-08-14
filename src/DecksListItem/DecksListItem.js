import React from 'react';
import { Link } from 'react-router-dom';
import './DecksListItem.css';

export default function DecksListItem(props) {
  return (
    <li className="deck-li" key={`deck-li-${props.deckID}`}>
      <Link to={`/decks/${props.deckID}`} key={`link-to-deck-${props.deckID}`}>
        <button type="button" className="deck-link-button">
          {props.deckName}
        </button>
      </Link>
    </li>
  );
}
