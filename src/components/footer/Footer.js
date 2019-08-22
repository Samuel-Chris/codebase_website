import React from 'react'
import './footer-styles.scss'
import InstagramLogo from '../../assets/images/instagram.svg'
import MediumLogo from '../../assets/images/medium.svg'
import LinkedinLogo from '../../assets/images/linkedin.svg'

class Footer extends React.Component {
    render() {
        return (
            <section className="footer">
              
                <div className="grid-wrapper">
                    <div className="col-4">
                        <ul className="about">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Policy</a></li>
                            <li><a href="#">Terms</a></li>
                        </ul>
                    </div>

                    <div className="col-4 mobile-order-1">
                      <h3>codebase</h3>
                      <p>Be sure to take a look at our Terms of Use and Privacy Policy</p>
                    </div>

                    <div className="col-4 social">
                        <p>Follow Us</p>
                        <ul className="follow">
                            <li><a href="#" className="icon"><object data={InstagramLogo} type="image/svg+xml"></object></a></li>
                            <li><a href="#" className="icon"><object data={LinkedinLogo} type="image/svg+xml"></object></a></li>
                            <li><a href="#" className="icon"><object data={MediumLogo} type="image/svg+xml"></object></a></li>
                        </ul>
                    </div>
                </div>
                
            </section>
        )
    }
}

export default Footer
