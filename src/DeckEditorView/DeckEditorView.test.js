// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// make the DeckEditorView component available
import DeckEditorView from './DeckEditorView';
import { CARDS_STORE } from '../STORE/cards';

// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  const match = {
    path: '/decks/:deckID',
    url: '/decks/1',
    isExact: true,
    params: { deckID: '1' },
  };
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(
    <Router>
      <DeckEditorView
        cards={CARDS_STORE}
        filteredCards={CARDS_STORE}
        match={match}
        updateCurrentDeck={() => {}}
        setDeckToSelected={() => {}}
      />
    </Router>,
    div
  );

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});
