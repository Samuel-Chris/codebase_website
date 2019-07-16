import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/button'

import './process.css'
import '../../assets/css/global.css'

const OurProcess = ({ gridItems }) => (
  <div className='header ctr'>
    {gridItems.map(item => (    
      <div key={item.image} className='titles'>
          <h1>{item.heading}</h1>
    </div>
    ))}
  </div>
)

OurProcess.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default OurProcess
