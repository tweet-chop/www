import React from 'react'

import './TextArea.css'

const TextArea = ({className = '', name, placeholder, value, onChange }) => (
  <textarea
    name={name}
    className={`input-textarea ${className}`}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default TextArea
