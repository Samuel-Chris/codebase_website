import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'
import SearchBox from '../SearchBox'

import './navBar.css'

const NavBar = ({toggleNavbar, isActive}) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar' aria-label='main navigation'>
        <div className='nav'>
          <Link to='/' className='navbar-item'><strong>Codebase Studio</strong></Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`nav ${isActive ? 'is-active' : ''}`} id='navMenu'>
          <div className='nav'>
            <Link className='navbar-item' to='/about'>About</Link>
            <Link className='navbar-item' to='/pricing'>Pricing</Link>
            <Link className='navbar-item' to='/blog'>Blog</Link>
            <Link className='button is-primary is-outlined' to='/contact'>Contact Us</Link>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
