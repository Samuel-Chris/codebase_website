import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/button'

import './offerings.css'
import '../../assets/css/global.css'

const Offerings = ({ gridItems }) => (
  <div className=''>
    {gridItems.map(item => (    
        <div key={item.image} className='container two-grid' style={{borderRadius: '5px'}}>
          <section className=''>
          <p className='image-section'>
          <img alt='' src={item.image} /></p>
      </section>
      <section className='text-section'>
        <h1>{item.heading}</h1>
        <p>{item.text}</p>
        <Button text={'Learn More'}></Button>
      </section>
    </div>

    ))}
  </div>
)

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Offerings
