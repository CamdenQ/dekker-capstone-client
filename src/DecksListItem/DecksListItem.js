import React from 'react';
import { Link } from 'react-router-dom';

export default function DecksListItem(props) {
  return (
    <li>
      <Link to={`/cards/${props.deckID}`}>{props.deckName}</Link>
    </li>
  );
}
