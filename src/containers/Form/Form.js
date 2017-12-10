import React from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';

import './Form.css';

const Form = ({ textarea, select, button, onSubmit }) => (
  <div className="form">
    <Input
      type={'textarea'}
      label={'Paste the text you want to chop:'}
      placeholder={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
      value={textarea.value}
      onChange={textarea.onChange}
    />

    <Input
      type={'select'}
      label={
        'Please select the number of characters you want to chop your text into:'
      }
      options={select.options}
      value={select.value}
      onChange={select.onChange}
    />

    <Button className="go-button" onClick={onSubmit}>
      Go
    </Button>
  </div>
);

export default Form;
