import React from 'react'
import Button from '../SubComponents/Button'

export default function Hero4() {
    return (
        <div className="hero hero4">
            <div className="grid-wrapper">
                <div className="col-6 main">
                    <p>How much will my project cost?</p>
                    <h1>Download the Cost Calculator</h1>
                    <p>Not only will you be able to test out performance a Flutter app is, but you will be able to compare our development costs to native development.</p>   
                    <div className="btns">
                        <Button white>Button</Button>
                        <Button white>Button</Button>
                    </div>
                </div>
                <div className="col-6 img-container">
                    <img className="pc" src="https://placehold.it/394x707" alt=""/>
                </div>
            </div>
        </div>

    )
}
