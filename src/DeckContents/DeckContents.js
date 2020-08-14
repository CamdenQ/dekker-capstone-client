import React, { Component } from 'react';
import DeckContentsItem from '../DeckContentsItem/DeckContentsItem';
import './DeckContents.css';

class DeckContents extends Component {
  state = {
    cards: this.props.cards,
    deck: this.props.deck,
    deckID: this.props.deckID,
    deckName: this.props.deck.title,
    selected: this.props.selected,
  };

  componentDidMount() {
    const deck = this.props.deck;
    console.log('Deck passed DeckContents component as prop:');
    console.table(deck);
    const deckID = Number(this.state.deckID);
    console.log(`Deck ID in DeckContents: ${deckID}`);
    this.props.updateCurrentDeck(deckID);
    this.props.setDeckToSelected(deck);
  }

  render() {
    if (!this.props.deck || !this.props.deck.id) {
      return (
        <section className="deck-contents">
          <p>Loading...</p>
        </section>
      );
    }

    if (this.state.selected.length === 0) {
      return (
        <section className="deck-contents">
          <h2 className="deck-list-title">{this.state.deckName}</h2>
          <p>Click a card from the list on the right to add it to your deck!</p>
          {/* prettier-ignore */}
          <p>If you change your mind, you can click the card in this list to remove it!</p>
        </section>
      );
    }

    return (
      <section className="deck-contents">
        <h2 className="deck-list-title">{this.state.deckName}</h2>
        <button onClick={this.props.onClickSave}>Save Deck</button>
        <button onClick={this.props.onClickDelete}>Delete Deck</button>
        <ul className="deck-list">
          {this.state.selected.map((cardID, i) => {
            const card = this.state.cards[cardID - 1];
            return (
              <DeckContentsItem
                key={i}
                card={card}
                cardIndex={i}
                onClick={this.props.onDeckContentsItemClick}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default DeckContents;
