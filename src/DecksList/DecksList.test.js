// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// make the DecksList component available
import DecksList from './DecksList';

// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  const decks = [
    { id: 1, title: 'Test Deck 1', contents: '1,2,3,4' },
    { id: 2, title: 'Test Deck 2', contents: '1,2,3,4' },
  ];

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(
    <Router>
      <DecksList decks={decks} />
    </Router>,
    div
  );

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});
