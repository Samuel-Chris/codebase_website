import React from 'react'
import Helmet from 'react-helmet'
import OfferingLeft from '../OfferingLeft'
import OfferingSpeed from '../OfferingSpeed'
import OfferingPrice from '../OfferingPrice'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import Button from '../button/button'

import './index.css'

const HomePageTemplate = ({
  title,
  subtitle,
  heading,
  description,
  offeringLeft,
  offeringSpeed,
  offeringPrice,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='header-content'>
      <div className='header-text'>
          <h1>
              {title}
          </h1>
          <p>{subtitle}</p>
          <Button text={'Learn More'}></Button>
        </div>
        <div className='header-image'>
        </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>

        <div className=''>
          <div className=''>
            <div className=''>
              <div className=''>
                <div>
                  <h3 className=''>
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
                <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <OfferingLeft gridItems={offeringLeft.blurbs} />
                <OfferingSpeed gridItems={offeringSpeed.blurbs} />
                <OfferingPrice gridItems={offeringPrice.blurbs} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offeringLeft: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  offeringSpeed: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  offeringPrice: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
