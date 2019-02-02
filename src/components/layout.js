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
                maxWidth: `700px`,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              {children}
            </div>
            <footer
              style={{
                display:"flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#333",
                color: "#fff",
                position: "absolute",
                bottom: "0",
                width: "100%",
                height: "2.5rem",
              }}
            >
              <span>© {new Date().getFullYear()}, For questions and inquiries contact me{"  "}</span>
              <a 
              style={{
                color: "#fff",
                textDecoration: "none"
              }}
              href="mailto:ej@ejmercado.com">ej@ejmercado.com</a>
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
