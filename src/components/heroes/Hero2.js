import React from 'react'
import Bounce from 'react-reveal/Bounce'
// import Fade from 'react-reveal/Fade'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"
import Button from '../button/Button'
import './hero-styles.scss'

export default function Hero2({content}) {
    const {heading, blurbs} = content;

    return (
        <div className="hero hero2">
            <div className="grid-wrapper">
                <div className="col-12">
                    <p className="lead">{heading.subheading}</p>
                </div>

                <div className="col-12">
                    <h1 className="lead">{heading.heading}</h1>
                </div>

                {blurbs.map((item, index) => {
                    return (
                        <div key={index} className="col-4 hero2-item">
                            <ScrollAnimation animateOnce={true} animateIn="fadeInUp">
                            <span className="image icon">
                                <img src={item.image.publicURL} alt={item.heading}/>    
                            </span>
                            <h3 className="lead">{item.heading}</h3>
                            <p>{item.text}</p>
                            </ScrollAnimation>
                        </div>  
                    )
                })}

                <div className="col-12">
                    <Bounce><Button>See Our Prices</Button></Bounce>
                </div>
            </div>
        </div>
    )
}
