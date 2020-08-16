import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import FilterOptions from '../FilterOptions/FilterOptions';
import NewDeckForm from '../NewDeckForm/NewDeckForm';
import Header from '../Header/Header';
import Card from '../Card/Card';
import Nav from '../Nav/Nav';

import './CardsDBView.css';

export default function CardsDBView(props) {
  const { cards, filteredCards } = props;
  return (
    <>
      <Nav />
      <Header />
      <main>
        <FilterOptions onChange={props.onFilterChange} />
        <NewDeckForm
          onClick={props.onClickNewDeck}
          onSubmit={props.onSubmitNewDeck}
          namingDeck={props.namingDeck}
          onCancel={props.onCancelNewDeck}
        />

        <div className="cards-sections flex row">
          <InfiniteScroll
            dataLength={cards.length}
            next={props.fetchMoreCards}
            hasMore={cards.length > 100 ? false : true}
            loader={<h4>Loading...</h4>}>
            <div className="Cards">
              {filteredCards.map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </main>
    </>
  );
}
