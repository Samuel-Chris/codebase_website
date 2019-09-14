import React from 'react'
import './blog-styles.scss'
import {Link} from 'gatsby'
import Img from "gatsby-image"
import TextTruncate from 'react-text-truncate';

export default function BlogPost(props) {
    const {content, img} = props;
    const {node: post} = content;
    return (
        <div className="blog-post">
            <Img fluid={img} alt=""/>
            <div className="card-content">
                <p className="lead dev">{post.frontmatter.topic}</p>
                {/* <h3 className="lead title">{post.frontmatter.title}</h3> */}
                <TextTruncate line={2} element="h3" truncateText="..." text={post.frontmatter.title} containerClassName="lead"/>
                {/* <p className="text">{post.excerpt}</p> */}
                <TextTruncate line={4} element="p" truncateText="..." text={post.excerpt} containerClassName="text"/>
                <p className="lead read-more">
                    <Link to={post.fields.slug}>Read more</Link>
                </p>
            </div>
        </div>
    )
}
