// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// make the FilterOptions component available
import FilterOptions from './FilterOptions';

// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  const filters = {
    colors: {
      isRed: true,
      isBlack: false,
      isBlue: false,
      isWhite: false,
      isGreen: false,
    },
    types: {
      isCreature: true,
      isPlaneswalker: true,
      isArtifact: true,
      isEnchantment: true,
      isSorcery: true,
      isInstant: true,
      isLand: true,
    },
  };
  const onChange = () => {};

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(
    <Router>
      <FilterOptions filters={filters} onChange={onChange} />
    </Router>,
    div
  );

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});
