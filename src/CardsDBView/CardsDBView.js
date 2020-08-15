import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import FilterOptions from '../FilterOptions/FilterOptions';
import NewDeckForm from '../NewDeckForm/NewDeckForm';
import Card from '../Card/Card';

import './CardsDBView.css';

export default class CardsDBView extends Component {
  render() {
    const { cards, filteredCards } = this.props;
    return (
      <>
        <FilterOptions onChange={this.props.onFilterChange} />
        <NewDeckForm
          onClick={this.props.onClickNewDeck}
          onSubmit={this.props.onSubmitNewDeck}
          namingDeck={this.props.namingDeck}
          onCancel={this.props.onCancelNewDeck}
        />
        <InfiniteScroll
          dataLength={cards.length}
          next={this.props.fetchMoreCards}
          hasMore={cards.length > 100 ? false : true}
          loader={<h4>Loading...</h4>}>
          <div className="Cards">
            {filteredCards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
