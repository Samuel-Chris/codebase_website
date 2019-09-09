import React from 'react'
import './process-styles.scss'

export default function Section6(props) {
    const {heading, subheading, text} = props.content;
    return (
        <div className="hero process pad process-section6">
            <div className="grid-wrapper">
                <div className="col-6 col-sm-12 img-container top">
                    <img src="https://placehold.it/360" alt=""/>
                </div>

                <div className="col-6 col-sm-12 text-wrapper bottom">
                    <div className="text">
                        <p className="lead">{subheading}</p>
                        <h1 className="lead">{heading}</h1>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
