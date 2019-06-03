import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import team from '../assets/images/codebase_development_team.png'
import pic02 from '../assets/images/prototype_icon.png'
import pic03 from '../assets/images/build_icon.png'
import pic04 from '../assets/images/launch_icon.png'

import andriodIcon from '../assets/images/flutter_andriod.png'
import iosIcon from '../assets/images/flutter_ios.png'
import webIcon from '../assets/images/flutter_web.png'
import windowsIcon from '../assets/images/flutter_windows.png'
import macIcon from '../assets/images/flutter_macos.png'
import embedIcon from '../assets/images/flutter_embedded.png'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Codebase - Flutter Cross-development";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>We can develop your project in record time</h2>
                            </header>
                            <p>Developing in Flutter, Google's cross-platform solution, allows us to creates native apps for iOS, Android, desktop, the web and even embedded devices all from a single codebase. All at a silky smooth 60FPS, which means your customers will have a great user experience.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={team} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                    <div className="col-6">
                            <ul className="major-icons">
                                <li><span ><img src={andriodIcon} alt="Mac OS"/></span></li>
                                <li><span ><img src={iosIcon} alt="Mac OS"/></span></li>
                                <li><span ><img src={webIcon} alt="Mac OS"/></span></li>
                                <li><span ><img src={windowsIcon} alt="Mac OS"/></span></li>
                                <li><span ><img src={macIcon} alt="Mac OS"/></span></li>
                                <li><span ><img src={embedIcon} alt="Mac OS"/></span></li>
                            </ul>
                        </div>
                    <div className="col-6">
                            <header className="major">
                                <h2>You can target all major platforms</h2>
                            </header>
                            <p>Developing in Flutter, Google's cross-platform UI toolkit, creates native apps for iOS, Android, desktop, the web and even bedded devices all from a single codebase. All at a silky smooth 60fps, which means your customers will have a great user experience.</p>
                        </div>
                        

                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>We take care of every aspect of your project</h2>
                            </header>
                            <p>Let us help you get from concept to completion</p>
                        </div>

                        <div className="col-4">
                            <span className="image icon"><img src={pic02} alt="" /></span>
                            <h3>Plan & Design</h3>
                            <p>Let our in-house designer help you through the process of taking your idea and </p>

                        </div>
                        <div className="col-4">
                            <span className="image icon"><img src={pic03} alt="" /></span>
                            <h3>Prototype & Code</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
     
                        </div>
                        <div className="col-4">
                            <span className="image icon"><img src={pic04} alt="" /></span>
                            <h3>Test & Launch</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>

                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Interesting in talking more about your project?</h2>
                        </header>
                        <p>Contact us to recieve a free quote and timeline for your project</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                        <form 
                            name="contact" 
                            type="text"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field">
                            <input 
                                type="text"
                                name="name"
                                placeholder="your name"/>
                            <button>Send</button>
                        </form>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;