import React, { Component } from "react"
import Layout from '../components/layout/Layout'
import { Link, graphql } from 'gatsby'
import Section1 from '../components/pricing-page/Section1'
import Section1B from '../components/pricing-page/Section1B'
import Section2 from '../components/pricing-page/Section2'
import Section3 from '../components/pricing-page/Section3'
import Hero4 from '../components/heroes/Hero4'
import Hero4Mobile from '../components/heroes/Hero4Mobile'
import Hero5 from '../components/heroes/Hero5'
import SEO from '../components/SEO/Seo'

export class PricingPageTemplate extends Component {
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
      this.setState({isMobile: document.documentElement.clientWidth <= 981})
    }
    

    render() {
      const {section1, section2, section3, section4, meta_title, meta_description, path} = this.props;

        return (
            <Layout>
                <SEO title={meta_title} description={meta_description} pathname={path} />
                <Section1B content={section1} isMobile={this.state.isMobile}/>
                <Hero5 content={section4}/>
                <Section3 />
            </Layout>
        );
    }
}

const PricingPage = ({ data }) => {
    const mainPage = data.mainPage;
    const currentPage = data.currentPage;
  
    return  (
        <PricingPageTemplate 
            section1={currentPage.frontmatter.pricing_page_section1}
            section2={currentPage.frontmatter.pricing_page_section2}
            meta_title={currentPage.frontmatter.meta_title}
            meta_description={currentPage.frontmatter.meta_description}
            path={currentPage.frontmatter.path}
            section3={mainPage.frontmatter.section4}
            section4={mainPage.frontmatter.section5}
        />
      )
  }

  
export default PricingPage




export const pageQuery = graphql`
  query {
    mainPage: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        section4 {
          description
          heading
          subheading
          image {
            publicURL
          }
        }
        section5 {
          description
          heading
          subheading
        }
      }
    }
    currentPage: markdownRemark(frontmatter: { templateKey: { eq: "pricing-page" } }) {
     frontmatter {
      meta_title
      meta_description
      path
      pricing_page_section1 {
        heading
        subheading
      }
      pricing_page_section2 {
        heading
        subheading
        text
        image {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
     }
    }
  }`
