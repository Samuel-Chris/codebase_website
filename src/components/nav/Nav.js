import React from 'react'
import codebaseLogo from '../../assets/images/codebase_logo.svg'


class Nav extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            scrolled: false
        }

    }

    componentDidMount() {
        window.addEventListener('scroll', function(e){
            if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
                this.setState({
                    scrolled: true
                });
            } else if (document.documentElement.scrollTop < 100) {
                this.setState({
                    scrolled: false
                });
            }
        }.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', function(e){
            if (document.documentElement.scrollTop > 100) {
                this.setState({
                    scrolled: true
                });
            } else if (document.documentElement.scrollTop < 100) {
                this.setState({
                    scrolled: false
                });
            }
        }.bind(this));
    }

   updateState() {

   }

    render() {
        return (
           <div>
            <nav className={this.state.scrolled ? 'colored' : 'none'}>
                <div className="inner nav">
                    <img className="image logo" src={codebaseLogo} alt="Codebase logo"/>
                    <ul>
                        <li><a href="#">Why Choose Us</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Process</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    <h3>
                        <a href="#">Let's Chat</a>
                    </h3>
                </div>
            </nav>

            <div className="dummy-nav">
                
            </div>
           </div>
        )
    }
}

export default Nav
