import React from 'react';
import Layout from "../components/layout";
import Img from 'gatsby-image';
import Metatags from '../components/Metatags';
import { graphql } from 'gatsby';

const BlogPost = (props) => {
    const post = props.data.markdownRemark;
    const url = props.data.site.siteMetadata.siteUrl;
    const { description, title } = post.frontmatter;
    const thumbnail = post.frontmatter.image.childImageSharp.resize.src;

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
                <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
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
                image {
                    childImageSharp {
                        resize(width: 500, height: 500) {
                            src
                        }
                        fluid(maxWidth: 700){
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