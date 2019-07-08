import React from 'react'
import './button.css'

const Button = (props) => (
  <button className='primary-button'>
      <p>{props.text}</p>
  </button>
)


export default Button
