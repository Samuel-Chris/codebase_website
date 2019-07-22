import React from 'react'
import Helmet from 'react-helmet'
import OfferingLeft from '../OfferingLeft'
import OfferingSpeed from '../OfferingSpeed'
import OfferingPrice from '../OfferingPrice'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import Button from '../button/button'
import OurProcess from '../OurProcess/index'
import Process from '../Process/index'

import './index.css'
import '../../assets/css/global.css'

const HomePageTemplate = ({
  title,
  subtitle,
  header_image,
  heading,
  description,
  offeringLeft,
  offeringSpeed,
  offeringPrice,
  ourProcess,
  process,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='container header-content'>
      <div className='header-text'>
          <h1>
              {title}
          </h1>
          <p>{subtitle}</p>
          <Button text={'Learn More'}></Button>
        </div>
        <div className='header-image'>
          <img alt='' src={header_image} />
        </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>

        <div className=''>
          <div className=''>
            <div className=''>
              <div >
                <div className='header ctr'>
                  <h1 className='titles'>
                    {heading}
                  </h1>

                </div>

                <OfferingLeft gridItems={offeringLeft.blurbs} />
                <OfferingSpeed gridItems={offeringSpeed.blurbs} />
                <OfferingPrice gridItems={offeringPrice.blurbs} />
                <OurProcess gridItems={ourProcess.blurbs} />
                <div className=''>
                  <Process gridItems={process.blurbs} />
                </div>
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
  header_image: PropTypes.string,
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
  ourProcess: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  process: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
