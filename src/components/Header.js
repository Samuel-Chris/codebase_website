import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import Hero from './heroes/Hero'
import Hero2 from './heroes/Hero2'
import Hero3 from './heroes/Hero3'
import Hero4 from './heroes/Hero4'
import Hero5 from './heroes/Hero5'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    }
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.updateState();
    window.addEventListener('resize', this.updateState);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateState);
  }

  updateState() {
    this.setState({isMobile: document.documentElement.clientWidth <= 981})
  }

    render() {
        return (
           <div>
             {this.state.isMobile ? <MobileNav /> : <Nav />}
           </div>
        )
    }
}

export default Header
