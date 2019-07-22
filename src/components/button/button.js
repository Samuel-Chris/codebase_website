import React from 'react'
import './button.css'

const Button = (props) => (
  <button className='primary-button'>
      <p className='button-text'>{props.text}</p>
  </button>
)


export default Button
