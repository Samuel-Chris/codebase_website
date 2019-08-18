import React from 'react'
import Fade from 'react-reveal/Fade'
import Button from '../button/Button'
import './hero-styles.scss'
import HeroIcon1 from '../../assets/images/hero_icon_1.svg'
import HeroIcon2 from '../../assets/images/hero_icon_2.svg'
import HeroIcon3 from '../../assets/images/hero_icon_3.svg'

export default function Hero2({isMobile, content}) {
    const {heading, blurbs} = content;
    console.log(heading.heading);

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
                        <Fade bottom duration={500}>
                            <div className="col-4 hero2-item">
                                <span className="image icon">
                                    <img src={item.image.publicURL} alt="Icon"/>
                                </span>
                            <h3 className="lead">{item.heading}</h3>
                            <p>{item.text}</p>
                        </div>
                    </Fade>    
                    )
                })}

                <div className="col-12">
                    <Button>See Our Prices</Button>
                </div>
            </div>
        </div>
    )
}
