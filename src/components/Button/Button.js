import React from 'react';

import './Button.css';

const Button = ({ children, className = '', type, onClick }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
