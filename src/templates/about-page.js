import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/Layout'
import Section1 from '../components/about-page/Section1'
import Section2 from '../components/about-page/Section2'
import Section3 from '../components/about-page/Section3'
import Section5 from '../components/about-page/Section5'
import SEO from '../components/SEO/Seo'


export class aboutPageTemplate extends React.Component {
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
        const {meta_title, meta_description, path} = this.props;
        return (
            <Layout>
                <SEO title={meta_title} description={meta_description} pathname={path} />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section5 />
            </Layout>
        );
    }
}

export default aboutPageTemplate;


const aboutPage = ({ data }) => {
    // const { frontmatter } = data.markdownRemark
  
    return (
        <aboutPageTemplate
        //   meta_title={frontmatter.meta_title}
        //   meta_description={frontmatter.meta_description}
        //   path={frontmatter.path}
        />
    )
  }
  
//   export default aboutPage
  


// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
     
//     }
//   }
// `
