import React from 'react'
import Button from '../button/Button'
import Bounce from 'react-reveal/Bounce'
import './hero-styles.scss'


export default function Hero5(props) {
  const {description, heading, subheading} = props.content
    return (
        <div className="hero hero5">
          <div className="inner">
            <p className="lead">{subheading}</p>
            <h1 className="lead">{heading}</h1>
            <p>{description}</p>
            <Bounce><Button>Let's chat!</Button></Bounce>
          </div>
        </div>
    )
}
