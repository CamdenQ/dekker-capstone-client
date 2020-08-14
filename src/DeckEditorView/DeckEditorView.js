import React from 'react';
import FilterOptions from '../FilterOptions/FilterOptions';
import DeckContents from '../DeckContents/DeckContents';
import CardsListItem from '../CardsListItem/CardsListItem';
import './DeckEditorView.css';

export default function DeckEditorView(props) {
  if (!props.decks || props.decks.length === 0) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  const deckID = props.match.params.deckID;
  const cards = props.cards;
  const selected = props.selected;

  console.log(`Deck passed as prop into DeckEditorView module`);
  console.table(props.deck);

  return (
    <>
      <FilterOptions onChange={props.onFilterChange} />
      <div className="cards-sections flex row">
        <DeckContents
          deckID={deckID}
          deck={props.deck}
          cards={cards}
          selected={selected}
          setDeckToSelected={props.setDeckToSelected}
          onDeckContentsItemClick={props.onDeckContentsItemClick}
          onClickSave={props.onClickSave}
          onClickDelete={props.onClickDelete}
          updateCurrentDeck={props.updateCurrentDeck}
          history={props.history}
        />
        <div className="cards-sections flex row">
          <div className="database-list-wrapper">
            <section className="database-list">
              {cards.map((card, i) => (
                <CardsListItem
                  card={card}
                  key={`card-${i}`}
                  cardID={i + 1}
                  onCardListItemClick={props.onCardListItemClick}
                />
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
