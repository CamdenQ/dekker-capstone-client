import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import CardsDBView from './CardsDBView/CardsDBView';
import Landing from './Landing/Landing';
import DecksList from './DecksList/DecksList';
import DeckApiService from './services/deck-api-service';
import './App.css';

class App extends Component {
  state = {
    decks: [],
    cardTypes: [],
    cardColors: [],
  };

  componentDidMount() {
    DeckApiService.getDecks().then((res) => this.setState({ decks: res }));
  }

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
            path="/cards"
            render={() => <CardsDBView testProp="whatever" />}
          />
          <Route
            path="/decks"
            render={() => {
              return <DecksList decks={this.state.decks} />;
            }}
          />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
