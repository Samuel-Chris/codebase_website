import React from 'react'
import HeroImage from '../../assets/images/pic04.jpg'
import Button from '../SubComponents/Button'

export default function Hero() {
    return (
        <div className="hero hero1">
           <div className="grid-wrapper">
                <div className="col-7">
                    <h1 className="lead">We help non-technical founders build technical things</h1>
                    <p>We are a cross-platform development agency that wants to grow your idea into a huge success. </p>
                    <Button>How we can help</Button>
                </div>

                <div className="col-5 img-container">
                    <img src="https://placehold.it/360" alt="Image"/>
                </div>
           </div>
        </div>
    )
}
