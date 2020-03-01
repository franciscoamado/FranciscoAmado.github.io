import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Container>
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
              marginTop: rhythm(-1),
            }}
          >
          {post.frontmatter.date}
          </p>
          <div style={{marginBottom: 0}}></div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          {/* <hr
            style={{
              marginBottom: rhythm(1),
            }}
          /> */}
        </Container>
        <Bio />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={`blog${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <NextLink to={`blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </NextLink>
              )}
            </li>
          </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

const Container = styled.div`
  position: relative;
  line-height: 1.6em;
  padding: 0 120px 6vw;
  min-height: 230px;
`

const NextLink = styled(Link)`

  color: #323232;
  background: transparent;
  background-color: transparent;
  font-weight: bolder;
  text-decoration: none !important;

  &:focus, &:hover, &:visited, &:link, &:active {
    color: #323232;
    background: transparent;
    background-color: transparent;
    text-decoration: none !important;
  }

  &:hover {
    color: #323232;    
    background: transparent;
    background-color: transparent;
    text-decoration: none !important;
    opacity: 0.8;
  }
`;
