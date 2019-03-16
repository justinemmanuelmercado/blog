import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: `flex`,
      alignItems: `center`,
      margin: `0 auto`,
      marginBottom: `1.45rem`,
      maxWidth: 1024,
      padding: `1.45rem 1.0875rem`,
    }}
  >
    <div style={{
      marginRight: `1rem`
    }} >

      <Logo />
    </div>
    <div>
      <Link
        style={{
          color: `rgba(0,0,0,0.9)`
        }}
        to="/">Blog</Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
