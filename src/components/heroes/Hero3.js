import React from 'react'
import HeroImage from '../../assets/images/pic04.jpg'

const ListStyles = {
    listStyleImage: 'url({ListStyleImage})'
}

export default function Hero3() {
    return (
        <div className="hero hero3">
            <div className="grid-wrapper">
                <div className="col-7">
                    <p className="lead"> How are we different?</p>
                    <h1 className="lead"> Develop Once, Deploy Everywhere</h1>
                    <p>We exclusively use Flutter, Google’s cross-platform technology that is able to target all major platforms. There are huge benifits in developing with Flutter. </p>
                    
                    <dl>
                        <dt className="lead">Native Performance</dt>
                        <dd>Flutter compiles down to bytecode, which allows it to run at 60 & 120 FPS, exactly like a native app</dd>

                        <dt className="lead">Supports all Major Platforms</dt>
                        <dd>Flutter allows one codebase to generate an Andriod, IOS and web app with future support for outputting a desktop and IoT devices</dd>

                        <dt className="lead">Built in Record Time</dt>
                        <dd>Not only do we only have to develop one codebase for all platforms, Flutter </dd>
                    </dl>
                </div>

                <div className="col-5 img-container">
                    <img src="https://placehold.it/360" alt=""/>
                </div>
            </div>
        </div>
    )
}
