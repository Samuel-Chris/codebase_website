import React from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
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

                {blurbs.map(item => {
                    return (
                        <div className="col-4 hero2-item">
                            <Zoom>
                               <span className="image icon">
                                    <img src={item.image.publicURL} alt={item.heading}/>
                                </span>
                            </Zoom>
                            <Fade bottom>
                                <h3 className="lead">{item.heading}</h3>
                                <p>{item.text}</p>
                            </Fade>  
                        </div>  
                    )
                })}

                <div className="col-12">
                    <Button>See Our Prices</Button>
                </div>
            </div>
        </div>
    )
}
