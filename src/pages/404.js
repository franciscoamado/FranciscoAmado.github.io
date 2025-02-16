import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <div class="p-40 content-center">
        <Layout location={this.props.location} title={"Not Found"}>
          <SEO title="404: Not Found" />
          <p class="pb-40">You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Layout>
      </div>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
