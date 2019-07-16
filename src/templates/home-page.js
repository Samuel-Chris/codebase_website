import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        heading={frontmatter.heading}
        description={frontmatter.description}
        offeringLeft={frontmatter.offeringLeft}
        offeringSpeed={frontmatter.offeringSpeed}
        offeringPrice={frontmatter.offeringPrice}
        ourProcess={frontmatter.ourProcess}
        process={frontmatter.process}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
        description
        offeringLeft {
          blurbs {
            image
            heading
            text
          }
        }
        offeringSpeed {
          blurbs {
            image
            heading
            text
          }
        }
        offeringPrice {
          blurbs {
            image
            heading
            text
          }
        }
        ourProcess {
          blurbs {
            image
            heading
            text
          }
        }
        process {
          blurbs {
            image
            heading
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
