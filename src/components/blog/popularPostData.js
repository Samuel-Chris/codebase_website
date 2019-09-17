import { graphql, useStaticQuery } from 'gatsby'

const postData = () => {
  const data = useStaticQuery(
    graphql`
    query PopularPostsQuery{
      allMarkdownRemark(limit: 1000, filter: {frontmatter: {popularpost: {eq: true}}}) {
          edges {
            node {
              frontmatter {
                topic
                title
              }
            }
          }
        }
    }
    `
  )
  return data
}

export default postData;
