import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import FilterOptions from '../FilterOptions/FilterOptions';
import DeckContents from '../DeckContents/DeckContents';
import Card from '../Card/Card';

import './DeckEditorView.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';

export default class DeckEditorView extends Component {
  // state = { deckID: this.props.match.params.deckID, deck: this.props.deck };
  componentDidMount() {
    if (this.props.deck.id !== this.props.match.params.deckID) {
      this.props.updateCurrentDeck(this.props.match.params.deckID);
      // this.props.setDeckToSelected(this.props.deck);
    }
  }

  render() {
    if (!this.props.decks || this.props.decks.length === 0) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    const { deckID } = this.props.match.params;
    const { cards, filteredCards, selected } = this.props;

    return (
      <>
        <Nav />
        <Header />
        <main style={{ height: '100vh' }}>
          <FilterOptions
            onChange={this.props.onFilterChange}
            filters={this.props.filters}
          />
          <div className="cards-sections flex row">
            <DeckContents
              deckID={deckID}
              deck={this.props.deck}
              cards={cards}
              selected={selected}
              setDeckToSelected={this.props.setDeckToSelected}
              onDeckContentsItemClick={this.props.onDeckContentsItemClick}
              onClickSave={this.props.onClickSave}
              onClickDelete={this.props.onClickDelete}
              updateCurrentDeck={this.props.updateCurrentDeck}
              history={this.props.history}
            />
            <InfiniteScroll
              dataLength={cards.length}
              next={this.props.fetchMoreCards}
              scrollThreshold={0.1}
              hasMore={cards.length > 1130 ? false : true}
              loader={<h4>Scroll down to load more cards</h4>}>
              <div className="Cards">
                {filteredCards.map((card) => (
                  <Card
                    key={card.id}
                    card={card}
                    onClick={this.props.onClickCard}
                  />
                ))}
              </div>
            </InfiniteScroll>
          </div>
        </main>
      </>
    );
  }
}
