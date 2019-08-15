import React, { Component } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import Button from './SubComponents/Button'
import codebaseLogo from '../assets/images/codebase_logo.svg'

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
            <nav className="mobile-nav">
                <div className="main">
                    <img src={codebaseLogo} alt="codebase logo" />
                    <HamburgerMenu isOpen={this.state.isOpen} menuClicked={this.handleClick.bind(this)} strokeWidth={2} width={20} height={15} />
                </div>

                <div className={"hidden " + visible}>
                    <ul>
                        <li><h3><a href="#">Why Choose Us</a></h3></li>
                        <li><h3><a href="#">Pricing</a></h3></li>
                        <li><h3><a href="#">Process</a></h3></li>
                    </ul>
                    <p className="blog">Blog</p>
                    <Button>How we can help</Button>
                    <p className="copyright">
                        Copyright 2019
                    </p>
                </div>
            </nav>
        )
    }
}
