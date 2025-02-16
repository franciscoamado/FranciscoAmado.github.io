import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Random Access Memories" />
        <Grid>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div class="min-h-52 hover:opacity-60 transition-opacity">
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                <div key={node.fields.slug}>
                  <h3 class="font-semibold text-zinc-900 dark:text-zinc-100">
                      {title}
                  </h3>
                  <p class="font-mono text-xs mt-2 mb-4">{node.frontmatter.date}</p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                    />
                </div>
              </Link>
              </div>
            )
          })}
        </Grid>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

