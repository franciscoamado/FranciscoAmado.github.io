import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { scale } from "../utils/typography"

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
        <div className="relative leading-relaxed px-[120px] pb-[6vw] min-h-[230px]">
          <h1>{post.frontmatter.title}</h1>
          <p className="block -mt-6 mb-6 text-[0.83255rem] leading-[1.75rem]">
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr className="mb-6" />
          <h4>That's it for now 👋🏻</h4>
        </div>

        <ul className="flex flex-wrap justify-between list-none p-0">
          <li>
            {previous && (
              <Link 
                to={`${previous.fields.slug}`} 
                rel="prev"
                className="text-[#323232] bg-transparent font-bold no-underline hover:opacity-80 transition-opacity"
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link 
                to={`${next.fields.slug}`} 
                rel="next"
                className="text-[#323232] bg-transparent font-bold no-underline hover:opacity-80 transition-opacity"
              >
                {next.frontmatter.title} →
              </Link>
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
