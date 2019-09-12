import React from 'react'
import './blog-styles.scss'

export default function BlogPost(props) {
    const {content, img} = props;
    const {node: post} = content;
    return (
        <div className="blog-post">
            <img src={img} alt=""/>
            <div className="card-content">
                <p className="lead dev">{post.frontmatter.topic}</p>
                <h3 className="lead">{post.frontmatter.title}</h3>
                <p className="text">{post.excerpt}</p>
                <p className="lead read-more">
                    Read more
                </p>
            </div>
        </div>
    )
}
