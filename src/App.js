import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import CardsDBView from './CardsDBView/CardsDBView';
import Landing from './Landing/Landing';
import DecksList from './DecksList/DecksList';
import DeckApiService from './services/deck-api-service';
import DeckEditorView from './DeckEditorView/DeckEditorView';
import { CARDS_STORE } from './STORE/cards';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      decks: [],
      cards: CARDS_STORE,

      isRed: false,
      isBlack: false,
      isBlue: false,
      isWhite: false,
      isGreen: false,

      isCreature: false,
      isPlaneswalker: false,
      isArtifact: false,
      isEnchantment: false,
      isSorcery: false,
      isInstant: false,
      isLand: false,

      cardColors: [],
      cardTypes: [],

      filteredCards: [],
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    console.log(event.target.id + ' changed!');
    this.setState({ [event.target.id]: !this.state[event.target.id] });
    console.log(this.state);
  }

  componentDidMount() {
    DeckApiService.getDecks().then((res) => this.setState({ decks: res }));

    let cardColors = [],
      cardTypes = [],
      filteredCards = [];

    if (this.state.isRed) {
      cardColors.push('Red');
    }

    if (this.state.isBlack) {
      cardColors.push('Black');
    }

    if (this.state.isBlue) {
      cardColors.push('Blue');
    }

    if (this.state.isWhite) {
      cardColors.push('White');
    }

    if (this.state.isGreen) {
      cardColors.push('Green');
    }

    if (this.state.isCreature) {
      cardTypes.push('Creature');
    }

    if (this.state.isPlaneswalker) {
      cardTypes.push('Planeswalker');
    }

    if (this.state.isArtifact) {
      cardTypes.push('Artifact');
    }

    if (this.state.isEnchantment) {
      cardTypes.push('Enchantment');
    }

    if (this.state.isSorcery) {
      cardTypes.push('Sorcery');
    }

    if (this.state.isInstant) {
      cardTypes.push('Instant');
    }

    if (this.state.isLand) {
      cardTypes.push('Land');
    }

    if (cardColors) {
      cardColors.map((color) => {
        this.state.cards.map((card) => {
          if (card.colors.includes(color)) {
            filteredCards.push(card);
          }
        });
      });
    }

    if (cardTypes) {
      cardTypes.map((type) => {
        this.state.cards.map((card) => {
          if (card.types.includes(type)) {
            filteredCards.push(card);
          }
        });
      });
    }

    if (
      this.state.cardColors.length === 0 &&
      this.state.cardTypes.length === 0
    ) {
      this.state.cards.map((card) => filteredCards.push(card));
    }

    this.setState({ filteredCards: filteredCards });
  }

  // componentDidUpdate() {
  //   let cardColors = [],
  //     cardTypes = [],
  //     filteredCards = [];

  //   if (this.state.isRed) {
  //     cardColors.push('Red');
  //   }

  //   if (this.state.isBlack) {
  //     cardColors.push('Black');
  //   }

  //   if (this.state.isBlue) {
  //     cardColors.push('Blue');
  //   }

  //   if (this.state.isWhite) {
  //     cardColors.push('White');
  //   }

  //   if (this.state.isGreen) {
  //     cardColors.push('Green');
  //   }

  //   if (this.state.isCreature) {
  //     cardTypes.push('Creature');
  //   }

  //   if (this.state.isPlaneswalker) {
  //     cardTypes.push('Planeswalker');
  //   }

  //   if (this.state.isArtifact) {
  //     cardTypes.push('Artifact');
  //   }

  //   if (this.state.isEnchantment) {
  //     cardTypes.push('Enchantment');
  //   }

  //   if (this.state.isSorcery) {
  //     cardTypes.push('Sorcery');
  //   }

  //   if (this.state.isInstant) {
  //     cardTypes.push('Instant');
  //   }

  //   if (this.state.isLand) {
  //     cardTypes.push('Land');
  //   }

  //   if (cardColors) {
  //     cardColors.map((color) => {
  //       this.state.cards.map((card) => {
  //         if (card.colors.includes(color)) {
  //           filteredCards.push(card);
  //         }
  //       });
  //     });
  //   }

  //   if (cardTypes) {
  //     cardTypes.map((type) => {
  //       this.state.cards.map((card) => {
  //         if (card.types.includes(type)) {
  //           filteredCards.push(card);
  //         }
  //       });
  //     });
  //   }

  //   if (
  //     this.state.cardColors.length === 0 &&
  //     this.state.cardTypes.length === 0
  //   ) {
  //     this.state.cards.map((card) => filteredCards.push(card));
  //   }

  //   this.setState({ filteredCards: filteredCards });
  // }

  render() {
    return (
      <div className="wrapper">
        <Nav />
        <header>
          <h1>DEKKER</h1>
          <p>An MTG Deck Builder</p>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/cards"
            render={() => (
              <CardsDBView
                decks={this.state.decks}
                onChange={this.handleFilterChange}
                cards={this.state.filteredCards}
              />
            )}
          />
          <Route
            exact
            path="/decks/:deckID"
            render={(props) => (
              <DeckEditorView
                decks={this.state.decks}
                onChange={this.handleFilterChange}
                cards={this.state.filteredCards}
              />
            )}
          />
          <Route
            path="/decks"
            render={(props) => {
              return <DecksList decks={this.state.decks} />;
            }}
          />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
