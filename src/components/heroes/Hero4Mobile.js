import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Button from '../button/Button'
import './hero-styles.scss'


export default function Hero4Mobile() {
    return (
        <div className="hero hero4-mobile">
            <div className="grid-wrapper">
               <Zoom>
                    <div className="col-12">
                        <img src="https://placehold.it/394x707" alt=""/>
                    </div>
               </Zoom>

                <div className="col-12 main">
                    <p>How much will my project cost?</p>
                    <h1>Download the Cost Calculator</h1>
                    <p>Not only will you be able to test out performance a Flutter app is, but you will be able to compare our development costs to native development.</p>  
                    <div className="btns">
                        <Button color="white">Button</Button>
                        <Button color="white">Button</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
