import React from 'react'
import Img from "gatsby-image"
import './process-styles.scss'

export default function Section3(props) {
    const {heading, subheading, text, image} = props.content;
    console.log(image.childImageSharp.fluid.src);
    return (
        <div className="hero process pad process-section3">
            <div className="grid-wrapper">
                <div className="col-6 col-sm-12 text-wrapper top">
                    <div className="text">
                        <p className="lead">{subheading}</p>
                        <h1 className="lead">{heading}</h1>
                        <p>{text}</p>
                    </div>
                </div>
                <div className="col-6 col-sm-12 img-container bottom">
                    <Img style={{width: '80%'}} fluid={image.childImageSharp.fluid} alt=""/>
                </div>
            </div>
        </div>
    )
}
