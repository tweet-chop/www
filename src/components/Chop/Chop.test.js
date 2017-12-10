import React from 'react';
import ReactDOM from 'react-dom';
import Chop from './Chop';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chop />, div);
});
