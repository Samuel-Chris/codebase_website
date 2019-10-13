import React from 'react'
import image from '../../assets/images/pic03.jpg'

export default function Section2() {
    return (
        <div className="hero process pad about-section2">
            <div className="grid-wrapper">
                <div className="col-6 col-sm-12 text-wrapper top">
                    <div className="text">
                        <p className="lead">Where are we located?</p>
                        <h1 className="lead">We are a fully remote team</h1>
                        <p>Even though our main office is in Rio De Janeiro, Brazil, our team is spread across the globe.
                            We believe that with the modern communcation tools available to us, we can provide a very flexible work-life balance for our team while expanding the available talent to work on client projects.</p>
                    </div>
                </div>
                <div className="col-6 col-sm-12 img-container bottom">
                    <img style={{width: '80%'}} src={image} alt=""/>
                </div>
            </div>
        </div>
    )
}
