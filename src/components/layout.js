import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="page-container" style={{
          position: "relative",
          minHeight: "100vh"
        }}>
          <div className="content-wrap" style={{
            paddingBottom: "2.5rem"
          }}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 1024,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              {children}
            </div>
            <footer
              style={{
                margin: '0 auto',
                bottom: "0",
                width: "90%",
                height: "3rem",
              }}
            >
              <span>© {new Date().getFullYear()}, <a
                style={{
                  textDecoration: "none"
                }}
                href="mailto:ej@ejmercado.com">ej@ejmercado.com</a></span>
            </footer>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
