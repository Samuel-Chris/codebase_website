import React from 'react'
import Button from '../SubComponents/Button'
import HeroIcon1 from '../../assets/images/hero_icon_1.svg'
import HeroIcon2 from '../../assets/images/hero_icon_2.svg'
import HeroIcon3 from '../../assets/images/hero_icon_3.svg'

export default function Hero2() {
    return (
        <div className="hero hero2">
            <div className="grid-wrapper">
                <div className="col-12">
                    <p className="lead">What We Do</p>
                </div>

                <div className="col-12">
                    <h1 className="lead">How we can help you</h1>
                </div>

                <div className="col-4 hero2-item">
                    <span className="image icon">
                        <img src={HeroIcon1} alt="Icon"/>
                    </span>
                    <h3 className="lead">Prototyping</h3>
                    <p>Creating a minimum viable product that you can test with real people </p>
                </div>

                <div className="col-4 hero2-item">
                    <span className="image icon">
                        <img src={HeroIcon2} alt="Icon"/>
                    </span>
                    <h3 className="lead">Full-scale Launch</h3>
                    <p>We will work with you to design, develop & launch your new product</p>
                </div>

                <div className="col-4 hero2-item">
                    <span className="image icon">
                        <img src={HeroIcon3} alt="Icon"/>
                    </span>
                    <h3 className="lead">Continual Support</h3>
                    <p>Ensuring a great user experience & developing features your users want</p>
                </div>

                <div className="col-12">
                    <Button>See Our Prices</Button>
                </div>
            </div>
        </div>
    )
}
