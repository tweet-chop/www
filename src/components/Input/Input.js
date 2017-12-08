import React from 'react'

import Select from './Select'
import TextArea from './TextArea'

import './Input.css'

const Input = ({ type, label, ...props }) => {
  let input;

  switch(type) {
    case 'select':
      input = <Select {...props} />
      break
    case 'textarea':
      input = <TextArea {...props} />
      break
    default:
      return <p>Error: input type `{type}` not recognized.</p>
  }

  return (
    <label className="input-wrapper">
      <span className="input-label">{label}</span>
      {input}
    </label>
  )
}

export default Input
