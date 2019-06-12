import React from 'react'

import codebaseLogo from '../assets/images/codebase_logo.png'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <img className="image logo" src={codebaseLogo} alt="Codebase logo"/>
                    <h1>Hi, we are a <strong>cross-platform</strong> <br />
                    development team specializing in <a target="_blank" href="http://flutter.dev">Flutter</a>.</h1>
                    <p>We can deliver native apps using one codebase <br /> 
                    saving you time, money and energy.</p>
                    <ul className="actions">
                        <li><a href="#four" className="button scrolly">Get a Free Quote</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
