import React from 'react'
import image from '../../assets/images/pic03.jpg'

export default function Section3() {
    return (
        <div className="hero process pad process-section4">
            <div className="grid-wrapper">
                <div className="col-6 col-sm-12 img-container top">
                    <img style={{width: '80%'}} src={image}/>
                </div>

               <div className="col-6 col-sm-12 text-wrapper bottom">
                    <div className="text">
                        <p className="lead">We want the best for you</p>
                        <h1 className="lead">Our promise</h1>
                        <p>At Codebase, we understand that the decision to build a startup as well as the team you choose to build it with, is a crucial, and even scary decision.
                            That’s why we give you our promise: to treat your startup like it was our startup. We will do our very best to do right thing for your project, your users, and your team.
                            Think of us as your partners in this journey. So ask us anything!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
