import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

const textarea = {
  value: '',
  onChange: () => {}
}
const select = {
  value: '',
  options: [],
  onChange: () => {}
}
const onSubmit = () => {}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form  textarea={textarea} select={select} onSubmit={onSubmit} />, div);
});
