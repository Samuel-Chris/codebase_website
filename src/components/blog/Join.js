import React from 'react'
import Button from '../button/Button'
import './blog-styles.scss'

export default function Join() {
    return (
        <div className="join">
            <h3>Join the community!</h3>
            <p>Join our Discord community to share knowledge, network and get feedback on your startup</p>
            <Button white width="12rem">Join Us</Button>
        </div>
    )
}
