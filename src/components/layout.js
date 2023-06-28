import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import HomeHeader from "../sections/header-home"
import BlogHeader from "../sections/header-blog"
import Footer from "../sections/footer"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog`
    let header

    if (location.pathname === rootPath) {
      header = <HomeHeader title={title} />
    } else if (
      location.pathname === blogPath ||
      location.pathname === blogPath + "/"
    ) {
      header = <BlogHeader title={title} />
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            padding: `0 120px 6vw`,
          }}
        >
          <Link to={`/blog/`}>{title}</Link>
        </h3>
      )
    }

    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(40),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <div
          style={{
            borderTop: "1px solid #eee",
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: "rgb(238, 238, 238)",
          }}
        >
          <Footer />
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
