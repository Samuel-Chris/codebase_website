import React from 'react'
import './blog-styles.scss'
import PopularPost from './PopularPost'
import { StaticQuery, graphql } from "gatsby"
import postData from './popularPostData'

export default function PopularPosts(props) {
    const data = postData();
    console.log(data);
    return (
        <div className="popular-posts">
            <h3>Popular Posts</h3>
            {data.allMarkdownRemark.edges.map(edge => {
                return <PopularPost content={edge.node.frontmatter} />
            })}
        </div>
    )
}

// export default props => (
//     // <StaticQuery
//     //   query={graphql`
//     //     query PopularPostsQuery{
//     //       allMarkdownRemark(limit: 1000, filter: {frontmatter: {popularpost: {eq: true}}}) {
//     //           edges {
//     //             node {
//     //               frontmatter {
//     //                 topic
//     //                 title
//     //               }
//     //             }
//     //           }
//     //         }
//     //     }
//     //   `}
//     //   render={data => <PopularPosts data={data} {...props} />}
//     // />
//     <StaticQuery
//       query={graphql`
//         query {
//          site {
//             siteMetadata {
//                 title
//             }
//          }
//         }
//       `}
//       render={data => <PopularPosts test={1} data={data}/>}
//     />
//   )
