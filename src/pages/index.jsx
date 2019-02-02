import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
      {
        postList.edges.map(({ node }, i) => {
          return (
            <div style={{
              marginBottom: `5rem`
            }}>
              <Link
                style={{
                  color: `#2b2b2b`,
                  textDecoration: `none`,
                  display: `flex`
                }}
                to={node.fields.slug}
                key={node.fields.slug}
                className="link">
                <div style={{
                  width: 130,
                  height: 90,
                  marginRight: `0.5rem`
                }}>

                  <Img fixed={node.frontmatter.image.childImageSharp.fixed} />
                </div>
                <div style={{
                  height: `auto`,
                  width: `auto`
                }}
                className="post-list">
                  <div>
                    <h2 style={{
                      margin: `0 auto`
                    }}>{node.frontmatter.title}</h2>
                    <p>{node.frontmatter.date}</p>
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }){
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            description
            image {
              childImageSharp {
                  fixed(width: 130, height: 90){
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