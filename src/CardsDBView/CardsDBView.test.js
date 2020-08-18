// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// make the CardsDBView component available
import CardsDBView from './CardsDBView';
import { CARDS_STORE } from '../STORE/cards';

// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(
    <Router>
      <CardsDBView cards={CARDS_STORE} filteredCards={CARDS_STORE} />
    </Router>,
    div
  );

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});
