import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { imageBoxShadow } from '../components/css'
import Layout from '../components/layout'
import Metatags from '../components/Metatags';

const resetMargin = {
  margin: `auto 0 0`
};

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  const { title, description, siteUrl } = props.data.site.siteMetadata;
  return (
    <Layout>
      <Metatags
        title={title}
        description={description}
        thumbnail={siteUrl + props.data.placeholderImage.childImageSharp.fixed.src}
        url={siteUrl}
        pathname={props.location.pathname}
      />
      {
        postList.edges.map(({ node }, i) => {

          if (!node.frontmatter.active) {
            return "";
          };

          return (
            <div style={{
              marginBottom: `5rem`
            }}>
              <Link
                className='blog-title link'
                style={{
                  color: `#2b2b2b`,
                  textDecoration: `none`,
                  display: `flex`
                }}
                to={node.fields.slug}
                key={node.fields.slug}>
                <div style={{
                  width: `auto`,
                  height: `auto`,
                  marginRight: `0.5rem`
                }}>

                  <Img style={{
                  ...imageBoxShadow
                  }} fixed={node.frontmatter.image.childImageSharp.fixed} />
                </div>
                <div style={{
                  height: `auto`,
                  width: `auto`,
                  ...resetMargin,
                  marginBottom: `1.5rem`,
                  marginLeft: `1rem`
                }}
                  className="post-list">
                  <div>
                    <h2 style={{ ...resetMargin }}>{node.frontmatter.title}</h2>
                    <small style={resetMargin}>{node.frontmatter.date}</small>
                  </div>
                </div>
              </Link>
              <div style={{
                margin: `0.5rem 0`
              }}>{node.excerpt}
                <Link to={node.fields.slug}>Read more</Link>
              </div>
            </div>
          )
        })
      }
    </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    placeholderImage: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 260, height: 240) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }){
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            active
            date(formatString: "MMMM Do YYYY")
            title
            description
            image {
              childImageSharp {
                  fixed(width: 195, height: 135){
                      ...GatsbyImageSharpFixed
                  }
              }
          }
          }
        }
      }
    }
  }
`