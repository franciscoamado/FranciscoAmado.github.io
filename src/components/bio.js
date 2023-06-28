/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import Tag from "../components/tag"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, location, social } = data.site.siteMetadata
        return (
          <Container>
            {/* <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            /> */}
            <div style={{ display: "block" }}>
              {/* <p style={{ marginBottom: 0 }}>
              Mumblings by <strong>{author}</strong>.
            </p>   */}
              <Description>That's it for now 👋🏻</Description>
              <Description>If you have anything to share with me</Description>
              <Description>
                feel free reach out on{" "}
                <Tag
                  href={`https://twitter.com/${social.twitter}`}
                  text="Twitter"
                  background="#00aced"
                />
              </Description>
            </div>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  position: relative;
  /* font-size: 2rem; */
  padding: 0 120px;
`
const Description = styled.body`
  text-align: left;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 1.6em;
`

export default Bio
