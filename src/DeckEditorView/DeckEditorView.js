import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import FilterOptions from '../FilterOptions/FilterOptions';
import DeckContents from '../DeckContents/DeckContents';
import Card from '../Card/Card';

import './DeckEditorView.css';

export default class DeckEditorView extends Component {
  state = { cards: [], page: 1 };

  componentDidMount() {
    fetch(`http://localhost:8000/api/cards?page=${this.state.page}`)
      .then((res) => res.json())
      .then((cards) => this.setState({ cards }))
      .catch((err) => console.log(err));
  }

  fetchMoreCards = () => {
    this.setState({ page: this.state.page + 1 });
    fetch(`http://localhost:8000/api/cards?page=${this.state.page}`)
      .then((res) => res.json())
      .then((cards) =>
        this.setState({ cards: [...this.state.cards, ...cards] })
      )
      .catch((err) => console.log(err));
  };

  render() {
    if (!this.props.decks || this.props.decks.length === 0) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    const deckID = this.props.match.params.deckID;
    const cards = this.props.cards;
    const filteredCards = this.props.filteredCards;
    const selected = this.props.selected;

    console.log(`Deck passed as prop into DeckEditorView module`);
    console.table(this.props.deck);

    return (
      <>
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
            hasMore={cards.length > 100 ? false : true}
            loader={<h4>Loading...</h4>}>
            <div className="Cards">
              {filteredCards.map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
