import React from 'react'
import './styles.scss'
import Button from '../button/Button'

export default function PricingTable() {
    return (
        <div className="hero table">
                    <table>
                        <tr>
                            <td>
                                <div className="table-heading">
                                    <h3 className="lead">Design Prototype </h3>
                                    <p className="startingat">Starting at</p>
                                    <h1 className="price">$1000</h1>
                                    <Button maxWidth="10.8725rem" height="2.6875rem">Get Started</Button>
                                </div>
                            </td>

                            <td>
                                <div className="table-heading">
                                    <h3 className="lead">Minimum Viable Product</h3>
                                    <p className="startingat">Starting at</p>
                                    <h1 className="price">$2500</h1>
                                    <Button maxWidth="10.8725rem" height="2.6875rem">Get Started</Button>
                                </div>
                            </td>

                            <td>
                                <div className="table-heading">
                                    <h3 className="lead">Fully-Featured Product</h3>
                                    <p className="startingat">Starting at</p>
                                    <h1 className="price">$5000</h1>
                                    <Button maxWidth="10.8725rem" height="2.6875rem">Get Started</Button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>Mobile & Web Wireframes</td>
                            <td>Mobile & Web Wireframes</td>
                            <td>Mobile & Web Wireframes</td>
                        </tr>

                        <tr>
                            <td>Interactive Design Prototypes</td>
                            <td>Interactive Design Prototypes</td>
                            <td>Interactive Design Prototypes</td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>IOS, Android & Web Apps Included</td>
                            <td>IOS, Android & Web Apps Included</td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>QA Testing</td>
                            <td>QA Testing</td>
                        </tr>

                    </table>
        </div>
    )
}
