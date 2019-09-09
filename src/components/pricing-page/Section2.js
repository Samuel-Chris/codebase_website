import React from 'react'
import './styles.scss'

export default function Section2(props) {
    const {heading, subheading, text, image} = props.content

    return (
        <div className="hero pricing-section2">
            <div className="grid-wrapper">
                <div className="img-container col-6 col-sm-12">
                    <img src="https://placehold.it/360" alt="alt"/>
                </div>
                <div className="content-container col-6 col-sm-12 ">
                    <div className="content">
                        <p className="lead">{subheading}</p>
                        <h1 className="lead">{heading}</h1>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
