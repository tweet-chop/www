import React from 'react';
import ReactDOM from 'react-dom';
import Chops from './Chops';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chops loading={false} chops={[]} />, div);
});
