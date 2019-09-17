import React from 'react'
import './blog-styles.scss'
import {Link} from 'gatsby'
import Img from "gatsby-image"
import TextTruncate from 'react-text-truncate';
import ClampLines from 'react-clamp-lines';
import Dotdotdot from 'react-dotdotdot'

export default function BlogPost(props) {
    const {content, img} = props;
    const {node: post} = content;
    const title = post.frontmatter.title;
    const text = post.excerpt;
    return (
        <div className="blog-post">
            <Img fluid={img} alt=""/>
            <div className="card-content">
                {/* <p className="lead dev">{post.frontmatter.topic}</p>
                <div className="title-container">
                    <h3 className="lead title overflow">{post.frontmatter.title}</h3>
                </div> */}
                <p className="lead dev">{post.frontmatter.topic}</p>
                <h3 className="lead title">{title}</h3>
                <p className="text">{text}</p> 
                {/* <TextTruncate line={2} element="h3" truncateText="…" text={title}/>
                <TextTruncate line={4} element="p" truncateText="…" text={text}/> */}
                {/* <Dotdotdot clamp={2}>
                    <h3>{title}</h3>
                </Dotdotdot>
                <Dotdotdot clamp={4}>
                    <p>{text}</p>
                </Dotdotdot> */}
                <p className="lead read-more">
                    <Link to={post.fields.slug}>Read more</Link>
                </p>           
            </div>
        </div>
    )
}
