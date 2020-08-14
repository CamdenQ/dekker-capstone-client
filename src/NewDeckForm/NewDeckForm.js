import React, { Component } from 'react';
import ApiService from '../services/api-service';
import history from '../../src/history';
import './NewDeckForm.css';

class NewDeckForm extends Component {
  constructor(props) {
    super(props);

    this.state = { newDeck: {} };

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    const deckTitle = document.getElementById('deck-title').value,
      deck = { title: deckTitle, contents: [] };

    ApiService.postDeck(deck)
      .then((res) => {
        console.log(`New Deck to be set in state:`);
        console.log(res);
        this.setState({ newDeck: res });
      })
      .then(() => {
        console.log('New Deck in state:');
        console.log(this.state.newDeck);
      });
    // history.push(`/decks/${this.state.newDeck.id}`);
  }

  render() {
    if (this.props.namingDeck) {
      return (
        <form className="new-deck-form" onSubmit={this.onSubmit}>
          <input
            aria-label="name"
            type="text"
            placeholder="Deck Name"
            name="deck-title"
            id="deck-title"
            required
          />
          <div className="new-deck-buttons">
            <button
              type="submit"
              className="new-deck-submit fa fa-check"></button>
            <button
              type="reset"
              className="new-deck-cancel fa fa-times"
              onClick={this.props.onCancel}></button>
          </div>
        </form>
      );
    }
    return (
      <button className="new-deck-button" onClick={this.props.onClick}>
        New Deck
      </button>
    );
  }
}

export default NewDeckForm;
