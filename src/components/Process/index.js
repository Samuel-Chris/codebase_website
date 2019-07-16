import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/button'

import './process.css'
import '../../assets/css/global.css'

const Process = ({ gridItems }) => (
  <div className='three-grid cards'>
    {gridItems.map(item => (    
      <div key={item.image} className='info-card'>
        <p className='image-section'>
          <img alt='' src={item.image} /></p>
        <div className=''>
          <h2>{item.heading}</h2>
          <p>{item.text}</p>
        </div>
    </div>

    ))}
  </div>
)

Process.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Process
