/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath, createFileNode } = require("gatsby-source-filesystem");
const path = require("path");

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogPost = path.resolve(`src/templates/blog-post.jsx`);
    return new Promise((resolve, reject) => {
        resolve(graphql(`
            {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    limit: 1000
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                            }
                        }
                    }
                }
            }
        `).then(result => {
            if (result.errors) {
                console.log(result.errors)
                return reject(result.errors)
            }

            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: blogPost,
                    context: {
                        slug: node.fields.slug,
                    }, // Additional data can be passed via context
                })
            })
            return;
        })
        )
    });
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        createNodeField({ node, name: `slug`, value: slug })
    }
}