import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './NewDeckForm.css';
import ApiService from '../services/api-service';

class NewDeckForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    const deckTitle = document.getElementById('deck-title').value,
      deck = { title: deckTitle, contents: [] };

    console.log(`New Deck Title: ${deckTitle}`);
    console.log(deck);

    let newID;

    ApiService.postDeck(deck).then((res) => (newID = res.id));
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

export default withRouter(NewDeckForm);
