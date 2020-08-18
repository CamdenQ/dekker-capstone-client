import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import FilterOptions from '../FilterOptions/FilterOptions';
import DeckContents from '../DeckContents/DeckContents';
import Card from '../Card/Card';

import './DeckEditorView.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';

export default class DeckEditorView extends Component {
  state = { deckID: this.props.match.params.deckID, deck: this.props.deck };
  componentDidMount() {
    this.props.updateCurrentDeck(this.state.deckID);
    this.props.setDeckToSelected(this.state.deck);
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

    console.log(`Deck passed as prop into DeckEditorView module`);
    console.table(this.props.deck);

    return (
      <>
        <Nav />
        <Header />
        <main style={{ height: '100vh' }}>
          <FilterOptions onChange={this.props.onFilterChange} />
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
              loader={<h4>Loading...</h4>}>
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
