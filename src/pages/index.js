import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';
import Hero from '../components/heroes/Hero'
import Hero2 from '../components/heroes/Hero2'
import Hero3 from '../components/heroes/Hero3'
import Hero4 from '../components/heroes/Hero4'
import Hero4Mobile from '../components/heroes/Hero4Mobile'
import Hero5 from '../components/heroes/Hero5'


class Homepage extends React.Component {
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
    
    updateState() {
      console.log(document.documentElement.clientWidth);
      this.setState({isMobile: document.documentElement.clientWidth <= 981})
    }
    

    render() {
        const siteTitle = "Codebase - Flutter Cross-Development Studio";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <Hero />
                <Hero2 />
                <Hero3 />
                {this.state.isMobile ? <Hero4Mobile /> : <Hero4 />}
                <Hero5 />

            </Layout>
        );
    }
}

export default Homepage;