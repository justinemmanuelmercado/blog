import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from "./logo";
const Header = ({ siteTitle }) => (
  <div
    style={{
      margin: `0 auto`,
      marginBottom: `1.45rem`,
      maxWidth: `1200px`,
      padding: `1.45rem 1.0875rem`,
    }}
  >

    <Link
      to="/"
      style={{
        color: `#2b2b2b`,
        textDecoration: `none`,
      }}
    >
      <Logo />

    </Link>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
