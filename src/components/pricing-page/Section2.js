import React from 'react'
import './styles.scss'
import Placeholder360 from '../../../static/img/Placeholder360.png'

export default function Section2() {
    return (
        <div className="hero pricing-section2">
            <div className="grid-wrapper">
                <div className="img-container col-6 col-sm-12">
                    <img src={Placeholder360} alt="alt"/>
                </div>
                <div className="content-container col-6 col-sm-12 ">
                    <div className="content">
                        <p className="lead">We want to see you succeed</p>
                        <h1 className="lead">Tech that saves you thousands</h1>
                        <p>We exclusively develop for with Flutter, Google’s cross-platform technology because it will save you almost half in development costs. We can develop once and create native performing apps for all the major platforms. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
