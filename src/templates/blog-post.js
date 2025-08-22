import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Container>
        <h1 class="text-lg font-bold text-zinc-900 dark:text-zinc-100 my-12 hover:opacity-60">
          <Link to="/blog/">{post.frontmatter.title}</Link>
        </h1>
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
          <div class="prose prose-lg max-w-none
          prose-headings:text-zinc-900 dark:prose-headings:text-zinc-100
          prose-h1:text-zinc-900 dark:prose-h1:text-zinc-100
          prose-h2:text-zinc-900 dark:prose-h2:text-zinc-100
          prose-h3:text-zinc-900 dark:prose-h3:text-zinc-100
          prose-h4:text-zinc-900 dark:prose-h4:text-zinc-100
          prose-h5:text-zinc-900 dark:prose-h5:text-zinc-100
          prose-h6:text-zinc-900 dark:prose-h6:text-zinc-100
          prose-p:text-zinc-900 dark:prose-p:text-zinc-100
          prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100
          prose-code:text-zinc-900 dark:prose-code:text-zinc-100
          prose-pre:text-zinc-900 dark:prose-pre:text-zinc-100
          prose-a:text-zinc-900 dark:prose-a:text-zinc-100 prose-a:underline prose-a:underline-offset-2
          text-zinc-900 dark:text-zinc-100" dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <h4 class="mt-20 text-zinc-900 dark:text-zinc-100">That's it for now 👋🏻</h4>
        </Container>

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
            {next && (
              <NextLink to={`${next.fields.slug}`} rel="next">
                ← {next.frontmatter.title}
              </NextLink>
            )}
          </li>
          <li>
            {previous && (
              <NextLink to={`${previous.fields.slug}`} rel="prev">
                {previous.frontmatter.title} →
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

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: var(--text-primary);
    background: transparent;
    background-color: transparent;
    text-decoration: none !important;
  }

  &:hover {
    color: var(--text-primary);
    background: transparent;
    background-color: transparent;
    text-decoration: none !important;
    opacity: 0.8;
  }
`
