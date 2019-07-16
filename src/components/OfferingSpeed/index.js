import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/button'

import './offeringSpeed.css'
import '../../assets/css/global.css'

const OfferingSpeed = ({ gridItems }) => (
  <div className=''>
    {gridItems.map(item => (    
      <div key={item.image} className='two-grid' style={{borderRadius: '5px'}}>
      <section className='text-section'>
        <div className='right-content'>
          <h1>{item.heading}</h1>
          <p>{item.text}</p>
          <Button text={'Learn More'}></Button>
        </div>
      </section>
        <section className=''>
          <p className='image-section'>
          <img alt='' src={item.image} /></p>
        </section>
    </div>

    ))}
  </div>
)

OfferingSpeed.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default OfferingSpeed
