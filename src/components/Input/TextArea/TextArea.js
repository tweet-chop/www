import React from 'react';

import './TextArea.css';

const TextArea = ({ className = '', name, placeholder, value, onChange }) => (
  <div>
    {/* 
      Wrapping the textarea in a <div> because of a bug in Chrome (on OSX only) that collapses a textarea when text is typed if it's a grid item ...
      https://github.com/rachelandrew/gridbugs#11-a-textarea-that-is-a-grid-item-collapses-to-zero-width
    */}
    <textarea
      name={name}
      className={`input-textarea ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default TextArea;
