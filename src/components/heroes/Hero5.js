import React from 'react'
import Button from '../SubComponents/Button'
import Bounce from 'react-reveal/bounce'

export default function Hero5() {
    return (
        <div className="hero hero5">
          <div className="inner">
            <p className="lead">Let's chat!</p>
            <h1 className="lead">Want to talk about your project?</h1>
            <p>Our goal is to help you take your idea from concept to creation. Let’s chat and see how we can bring you value.</p>
            <Bounce><Button>Let's chat!</Button></Bounce>
          </div>
        </div>
    )
}
