import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/button'

import './offeringLeft.css'
import '../../assets/css/global.css'

const OfferingLeft = ({ gridItems }) => (
  <div className=''>
    {gridItems.map(item => (    
        <div key={item.image} className='container two-grid' style={{borderRadius: '5px'}}>
          <section className='image-section'>
          <div className=''>
          <img alt='' src={item.image} /></div>
      </section>
      <section className='text-section'>
        <div className='left-content'>
          <h1>{item.heading}</h1>
          <p>{item.text}</p>
          <Button text={'Learn More'}></Button>
        </div>
      </section>
    </div>

    ))}
  </div>
)

OfferingLeft.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default OfferingLeft
