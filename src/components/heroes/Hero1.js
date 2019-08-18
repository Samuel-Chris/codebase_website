import React from 'react'
import Button from '../button/Button'
import Fade from 'react-reveal/Fade'
import './hero-styles.scss'


export default function Hero1(props) {
    const {heading, description, image} = props.content;
    return (
        <div className="hero hero1">
           <div className="grid-wrapper">
                <div className="col-7">
                    <Fade left>
                        <h1 className="lead">{heading}</h1>
                        <p>{description}</p>
                        <Button>How we can help</Button>
                    </Fade>
                </div>

                <div className="col-5 img-container">
                   <Fade right>
                    <img src={image.publicURL} alt="Image"/>
                   </Fade>
                </div>
           </div>
        </div>
    )
}
