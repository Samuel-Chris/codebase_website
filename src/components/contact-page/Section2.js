import React from 'react'
import './styles.scss'
import { ContactFormEnhanced } from './ContactForm'

export default function Section2() {
    return (
        <div className="hero contact-section2">
            <div className="grid-wrapper">
                <div className="text col-6 col-sm-12">
                    <p>Let’s Chat!</p>
                    <h1 className="lead">Contact Us</h1>
                    <p>Download our cost calculator app! Not only will you be able to test out performance a Flutter app is, but you will be able to compare our development costs compared to native development.</p>
                </div>

                <div className="col-6 col-sm-12">
                    <ContactFormEnhanced />
                </div>
            </div>
        </div>
    )
}
