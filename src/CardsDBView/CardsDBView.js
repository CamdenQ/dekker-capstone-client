import React from 'react';
import FilterOptions from '../FilterOptions/FilterOptions';
import CardsListItem from '../CardsListItem/CardsListItem';
import NewDeckForm from '../NewDeckForm/NewDeckForm';
import './CardsDBView.css';

export default function CardsDBView(props) {
  const cards = props.cards;
  return (
    <>
      <FilterOptions onChange={props.onFilterChange} />
      <NewDeckForm
        onClick={props.onClickNewDeck}
        onSubmit={props.onSubmitNewDeck}
        namingDeck={props.namingDeck}
        onCancel={props.onCancelNewDeck}
      />
      {/* <div className="cards-sections flex row">
        <CardsList cards={props.cards} />
      </div> */}
      <div className="overflow">
        <div className="Cards">
          {cards.map((card, i) => (
            <CardsListItem
              card={card}
              key={`card-${i}`}
              cardID={i + 1}
              onCardListItemClick={props.onCardListItemClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}
