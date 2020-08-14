import React, { Component } from 'react';
import DeckContentsItem from '../DeckContentsItem/DeckContentsItem';
import { CARDS_STORE } from '../STORE/cards';
import './DeckContents.css';

class DeckContents extends Component {
  componentDidMount() {
    const deck = this.props.deck;
    console.log('Deck passed DeckContents component as prop:');
    console.table(deck);
    const deckID = Number(this.props.deckID);
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

    const deckID = this.props.deck.id;
    const deckName = this.props.deck.title;
    const selected = this.props.selected;
    const deck = {
      id: deckID,
      title: deckName,
      contents: selected,
    };

    if (selected.length === 0) {
      return (
        <section className="deck-contents">
          <h2 className="deck-list-title">{deckName}</h2>
          <p>Click a card from the list on the right to add it to your deck!</p>
          {/* prettier-ignore */}
          <p>If you change your mind, you can click the card in this list to remove it!</p>
        </section>
      );
    }

    return (
      <section className="deck-contents">
        <h2 className="deck-list-title">{deckName}</h2>
        <button onClick={this.props.onClickSave}>Save Deck</button>
        <button onClick={this.props.onClickDelete}>Delete Deck</button>
        <ul className="deck-list">
          {selected.map((cardID, i) => {
            const card = CARDS_STORE[cardID - 1];
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
