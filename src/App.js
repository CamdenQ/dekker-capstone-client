import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import CardsDBView from './CardsDBView/CardsDBView';
import Landing from './Landing/Landing';
import DecksList from './DecksList/DecksList';
import ApiService from './services/api-service';
import DeckEditorView from './DeckEditorView/DeckEditorView';
import NotFound from './NotFound/NotFound';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      decks: [],
      cards: [],
      page: 1,
      selected: [],
      currentDeckID: 0,
      currentDeck: { contents: [] },

      namingDeck: false,

      isFiltered: false,

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

      filteredCards: [],
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.setDeckToSelected = this.setDeckToSelected.bind(this);
    this.handleClickCard = this.handleClickCard.bind(this);
    this.handleClickNewDeck = this.handleClickNewDeck.bind(this);
    this.handleCancelNewDeck = this.handleCancelNewDeck.bind(this);
    this.handleDeckContentsItemClick = this.handleDeckContentsItemClick.bind(
      this
    );
    this.handleClickSaveDeck = this.handleClickSaveDeck.bind(this);
    this.updateCurrentDeck = this.updateCurrentDeck.bind(this);
    this.handleSubmitNewDeck = this.handleSubmitNewDeck.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.fetchMoreCards = this.fetchMoreCards.bind(this);
  }

  filterCards() {
    let cardColors = [],
      cardTypes = [],
      filteredCards = this.state.cards;

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

    if (cardColors.length > 0) {
      console.log('Colors to filter by:');
      console.log(cardColors);

      filteredCards = filteredCards.filter((card) => {
        for (let i = 0; i < cardColors.length; i++) {
          if (card.colors.includes(cardColors[i])) {
            return true;
          }
        }
        return false;
      });
    }

    if (cardTypes.length > 0) {
      console.log('Types to filter by:');
      console.log(cardTypes);

      filteredCards = filteredCards.filter((card) => {
        for (let i = 0; i < cardTypes.length; i++) {
          if (card.types.includes(cardTypes[i])) {
            return true;
          }
        }
        return false;
      });
    }

    if (
      this.state.filteredCards.sort().toString() !==
      filteredCards.sort().toString()
    ) {
      this.setState({ filteredCards: filteredCards });
    }
  }

  updateCurrentDeck = (deckID) => {
    console.log(`Deck ID Passed into updateCurrentDeck: ${deckID}`);
    console.log(
      `Type of value passed as deckID into updateCurrentDeck: ${typeof deckID}`
    );
    ApiService.getDeck(deckID).then((res) =>
      this.setState({ currentDeck: res })
    );
  };

  setDeckToSelected = (deck) => {
    console.log(`Deck passed into setDeckToSelected:`);
    console.table(deck);
    let selected = deck.contents.sort();
    console.log(`Selected array set to state:`);
    console.log(selected);
    this.setState({ selected: [...selected] });
  };

  handleClickCard(e) {
    const newCardID = e.target.getAttribute('card_id');
    console.log(`Card with ID ${newCardID} clicked!`);
    let selected = this.state.selected;
    selected.push(newCardID);
    selected = selected.sort();
    this.setState({ selected: selected });
  }

  handleDeckContentsItemClick(e) {
    const index = e.target.getAttribute('card_index');
    const selected = this.state.selected;

    selected.splice(index, 1);
    this.setState({ selected: [...selected] });
  }

  handleFilterChange(e) {
    this.setState({ [e.target.id]: !this.state[e.target.id] });
  }

  handleClickNewDeck() {
    this.setState({ namingDeck: true });
  }

  handleSubmitNewDeck(e) {
    e.preventDefault();
    const deckTitle = document.getElementById('deck-title').value,
      deck = { title: deckTitle, contents: [] };

    ApiService.postDeck(deck);
  }

  handleCancelNewDeck() {
    this.setState({ namingDeck: false });
  }

  handleClickSaveDeck() {
    const deck = {
      id: this.state.currentDeck.id,
      title: this.state.currentDeck.title,
      contents: this.state.selected,
    };

    ApiService.updateDeck(deck);
  }

  handleClickDelete() {
    console.log('Delete clicked!');
    const id = Number(this.state.currentDeck.id);

    console.log(`ID of deck to be deleted: ${id}`);

    ApiService.deleteDeck(id);
  }

  fetchMoreCards = () => {
    this.setState({ page: this.state.page + 1 });
    ApiService.getCards(this.state.page)
      .then((cards) =>
        this.setState({ cards: [...this.state.cards, ...cards] })
      )
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    const { page } = this.state;
    ApiService.getDecks()
      .then((res) => this.setState({ decks: res }))
      .catch((err) => console.log(err));
    ApiService.getCards(page)
      .then((cards) => this.setState({ cards }))
      .catch((err) => console.log(err));

    this.filterCards();
  }

  componentDidUpdate() {
    this.filterCards();
  }

  render() {
    const {
      isRed,
      isBlack,
      isBlue,
      isWhite,
      isGreen,
      isCreature,
      isPlaneswalker,
      isArtifact,
      isEnchantment,
      isSorcery,
      isInstant,
      isLand,
    } = this.state;

    const filters = {
      colors: {
        isRed: isRed,
        isBlack: isBlack,
        isBlue: isBlue,
        isWhite: isWhite,
        isGreen: isGreen,
      },
      types: {
        isCreature: isCreature,
        isPlaneswalker: isPlaneswalker,
        isArtifact: isArtifact,
        isEnchantment: isEnchantment,
        isSorcery: isSorcery,
        isInstant: isInstant,
        isLand: isLand,
      },
    };
    const decks = this.state.decks;
    return (
      <>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/cards"
            render={() => (
              <CardsDBView
                decks={this.state.decks}
                cards={this.state.cards}
                filteredCards={this.state.filteredCards}
                filters={filters}
                namingDeck={this.state.namingDeck}
                fetchMoreCards={this.fetchMoreCards}
                onFilterChange={this.handleFilterChange}
                onClickNewDeck={this.handleClickNewDeck}
                onSubmitNewDeck={this.handleSubmitNewDeck}
                onCancelNewDeck={this.handleCancelNewDeck}
              />
            )}
          />
          <Route
            exact
            path="/decks"
            render={(props) => {
              return (
                <DecksList
                  decks={this.state.decks}
                  namingDeck={this.state.namingDeck}
                  onClickNewDeck={this.handleClickNewDeck}
                  onSubmitNewDeck={this.handleSubmitNewDeck}
                  onCancelNewDeck={this.handleCancelNewDeck}
                  onClickDelete={this.handleClickDelete}
                />
              );
            }}
          />
          <Route
            path="/decks/:deckID"
            render={(props) => (
              <DeckEditorView
                decks={decks}
                deck={this.state.currentDeck}
                cards={this.state.cards}
                filteredCards={this.state.filteredCards}
                filters={filters}
                selected={this.state.selected}
                fetchMoreCards={this.fetchMoreCards}
                onFilterChange={this.handleFilterChange}
                onClickCard={this.handleClickCard}
                onDeckContentsItemClick={this.handleDeckContentsItemClick}
                onClickSave={this.handleClickSaveDeck}
                onClickDelete={this.handleClickDelete}
                updateCurrentDeck={this.updateCurrentDeck}
                setDeckToSelected={this.setDeckToSelected}
                {...props}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
