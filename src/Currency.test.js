import React from 'react';
import ReactDOM from 'react-dom';
import Currency from './components/Currency';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Currency />, div);
  ReactDOM.unmountComponentAtNode(div);
});
