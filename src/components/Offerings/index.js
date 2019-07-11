import React from 'react'
import PropTypes from 'prop-types'

import './offerings.css'

const Offerings = ({ gridItems }) => (
  <div className='container'>
    {gridItems.map(item => (
      <div>      <div key={item.image} className='' style={{borderRadius: '5px'}}>
      <section className=''>
        <p className=''>
          <img alt='' src={item.image} />
        </p>
        <p>{item.text}</p>
      </section>
    </div></div>

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
