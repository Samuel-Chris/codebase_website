import React, { Component } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import Button from '../button/Button'
import codebaseLogo from '../../assets/images/codebase_logo_white.svg'
import './nav-styles.scss'
import { Link } from 'gatsby'

export default class MobileNav extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            scrolled: false,
            isOpen: false
        }

    }

    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    render() {
        let visible = this.state.isOpen && "visible"

        return (
            <div>
                <nav className="mobile-nav">
                    <div className="main">
                        <Link to="/"><img src={codebaseLogo} alt="codebase logo"/></Link>
                        <HamburgerMenu isOpen={this.state.isOpen} menuClicked={this.handleClick.bind(this)} strokeWidth={3} width={28} height={20} borderRadius={2} color="white"/>
                    </div>

                    <div className={"hidden " + visible}>
                        <ul>
                            <li><h3><a href="#">Why Choose Us</a></h3></li>
                            <li><h3><Link to="/pricing">Pricing</Link></h3></li>
                            <li><h3><a href="#">Process</a></h3></li>
                        </ul>
                        <p className="blog">Blog</p>
                        <Button color="white">How we can help</Button>
                        <p className="copyright">
                            Copyright 2019
                        </p>
                    </div>
                </nav>

                <div className="dummy-nav">
                    
                </div>
            </div>
        )
    }
}
