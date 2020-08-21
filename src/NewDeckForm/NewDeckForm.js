import React, { Component } from 'react';
import ApiService from '../services/api-service';
import history from '../../src/history';
import './NewDeckForm.css';

class NewDeckForm extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    const deck = { title: this.state.title, contents: [] };

    ApiService.postDeck(deck).then((res) => {
      console.log(`New Deck to be set in state:`);
      console.log(res);
      history.push(`/decks/${res.id}`);
    });
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    if (this.props.namingDeck) {
      return (
        <form className="new-deck-form" onSubmit={this.onSubmit}>
          <input
            aria-label="name"
            value={this.state.title}
            onChange={this.handleChange}
            type="text"
            placeholder="ex: My Awesome Deck!"
            name="deck-title"
            autoFocus="autofocus"
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
