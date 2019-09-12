import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/Layout'
import Section1 from '../components/blog/Section1'
import BlogPost from '../components/blog/BlogPost'
import Topics from '../components/blog/Topics'
import PopularPosts from '../components/blog/PopularPosts'
import './post-styles.scss'
import Join from '../components/blog/Join'
import pic1 from '../../static/img/frame_2.2.png'
// import pic2 from '../../static/img/frame_2.3.png'
// import pic3 from '../../static/img/frame_2_4.png'
// import pic4 from '../../static/img/frame_2.5.png'
// import pic5 from '../../static/img/frame_2.6.png'
// import pic6 from '../../static/img/frame_2.6.png'
// import pic7 from '../../static/img/frame_2.6.png'
// import pic8 from '../../static/img/frame_2.6.png'




export class BlogPageTemplate extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.context);
        const { currentPage: page, numPages } = this.props.context
        const isFirst = page === 1
        const isLast = page === numPages
        const prevPage = page - 1 === 1 ? "/blog" : `/blog/${(page - 1).toString()}`
        const nextPage = `/blog/${(page + 1).toString()}`
        const {section1, content} = this.props
        return (
           <Layout>
               <Section1 content={section1}/>
                <div className="grid-wrapper posts-wrapper">
                 <div className="post-container col-8 col-sm-12">
                     {content.map(post => {
                        // let pics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8]

                        return (
                           <div className="post-body">
                             <BlogPost key={post.node.id} content={post} img={pic1}/>
                           </div>
                          )

                     })}
                 </div>

                 <div className="col-4 col-sm-12 blog-sidebar">
                     <Join />
                     <Topics />
                     <PopularPosts />
                 </div>

                 <div className="pagination col-12">
                    {!isFirst && (
                    <Link to={prevPage} rel="prev">
                      ←
                    </Link>
                    )}
                   <div className="pagination-numbers">
                    {Array.from({ length: numPages }, (_, i) => (
                      <Link style={{color: page == i + 1 && `#693FAD`}} key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? "" : i + 1}`}>
                         {i + 1} 
                      </Link>
                    ))}
                   </div>
                    {!isLast && (
                      <Link to={nextPage} rel="next">
                        →
                      </Link>
                    )}
                  </div>
        
                </div>
           </Layout>
        )
    }
}

const BlogPage = ({data, pageContext}) => {
    const posts =  data.posts.edges;
    const currentPage = data.currentPage;

    return  (
        <BlogPageTemplate
            content={posts}
            section1={currentPage.frontmatter.blog_page_section1}
            context={pageContext}
            // featuredImage={featuredImage}
            // excerpt={excerpt}
            // topic={topic}
            // link={path}
        />
      )
  }

  
export default BlogPage

 export const pageQuery = graphql`
   query ($skip: Int!, $limit: Int!){
      posts:  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC } limit: $limit skip: $skip filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
        edges {
          node {
            id
            html
            excerpt(pruneLength: 105)
            fields {
              slug
            }
            frontmatter {
              tags
              featuredimage
              topic
              title
            }
          }
        }
      } 
   
      currentPage: markdownRemark(frontmatter: {templateKey: {eq: "blog-page"}}) {
       frontmatter {
         blog_page_section1 {
           heading
           text
         }
       }
     }
   }`

// export const blogListQuery = graphql`
//   query blogListQuery($skip: Int!, $limit: Int!) {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       limit: $limit
//       skip: $skip
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//   }
// `

// query ($skip: Int!, $limit: Int!) {
//   posts:  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC } limit: $limit skip: $skip filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
//     edges {
//       node {
//         id
//         html
//         excerpt(pruneLength: 105)
//         fields {
//           slug
//         }
//         frontmatter {
//           tags
//           featuredimage
//           topic
//           title
//         }
//       }
//     }
//   } 

//   currentPage: markdownRemark(frontmatter: {templateKey: {eq: "blog-page"}}) {
//    frontmatter {
//      blog_page_section1 {
//        heading
//        text
//      }
//    }
//  }