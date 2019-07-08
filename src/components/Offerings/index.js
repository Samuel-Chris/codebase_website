import React from 'react'
import PropTypes from 'prop-types'

const Offerings = ({ gridItems }) => (
  <div className='container'>
    {gridItems.map(item => (
      <div key={item.image} className='offering-section' style={{borderRadius: '5px'}}>
        <section className='section'>
          <p className='has-text-centered'>
            <img alt='' src={item.image} />
          </p>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Offerings
