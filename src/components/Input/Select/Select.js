import React from 'react';

import './Select.css';

const Select = ({
  className = '',
  name,
  placeholder,
  value,
  options = [],
  onChange
}) => (
  <select
    name={name}
    className={`input-select ${className}`}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  >
    {placeholder ? <option value="">{placeholder}</option> : null}
    {options.map(option => (
      <option value={option.value} key={option.key || option.value}>
        {option.text}
      </option>
    ))}
  </select>
);

export default Select;
