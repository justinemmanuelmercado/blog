import React from 'react';
import Layout from "../components/layout";
import Img from 'gatsby-image';
import { imageBoxShadow } from '../components/css';
import Metatags from '../components/Metatags';
import { graphql } from 'gatsby';

const BlogPost = (props) => {
    const post = props.data.markdownRemark;
    const url = props.data.site.siteMetadata.siteUrl;
    const { description, title } = post.frontmatter;
    const thumbnail = post.frontmatter.cover.childImageSharp.resize.src;

    return (
        <Layout>
            <Metatags
                title={title}
                description={description}
                thumbnail={url + thumbnail}
                url={url}
                pathname={props.location.pathname}
            />
            <div>
                <Img
                    style={{
                        width: "100%",
                        zIndex: "-1",
                        position: "absolute",
                        top: 114,
                        left: 0,
                        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(255,255,255,0.01))"
                    }}
                    fluid={post.frontmatter.cover.childImageSharp.fluid} />
                <div style={{
                    ...imageBoxShadow,
                    padding: "0.5em 2em",
                    backgroundColor: "#fcfcfc",
                }}>
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
                </div>
            </div>
        </Layout>
    )
};

export default BlogPost;

export const query = graphql`

    query PostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                description
                cover {
                    childImageSharp {
                        resize(width: 500, height: 500) {
                            src
                        }
                        fluid(maxWidth: 1920, maxHeight: 750){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }

        site {
            siteMetadata {
                siteUrl
            }
        }
    }
`