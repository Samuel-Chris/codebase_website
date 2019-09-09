import React from 'react'
import './blog-styles.scss'

export default function PopularPosts() {
    return (
        <div className="popular-posts">
            <h3>Popular Posts</h3>
            <div className="popular-post">
                <p className="lead topic">Development</p>
                <p className="lead desc">This is a header with two lines of text</p>
            </div>

            <div className="popular-post">
                <p className="lead topic">Development</p>
                <p className="lead desc">This is a header with two lines of text</p>
            </div>

            <div className="popular-post">
                <p className="lead topic">Development</p>
                <p className="lead desc">This is a header with two lines of text</p>
            </div>
        </div>
    )
}
