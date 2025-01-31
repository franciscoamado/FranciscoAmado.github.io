import React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

import HomeHeader from "../sections/header-home"
import BlogHeader from "../sections/header-blog"
import Footer from "../sections/footer"

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
        <h3 className="mt-0 px-[120px] pb-[6vw]">
          <Link to={`/blog/`}>{title}</Link>
        </h3>
      )
    }

    return (
      <div className="min-h-screen bg-stone-100">
        <div className="mx-auto max-w-[80rem] px-4 sm:px-6 lg:px-8 py-8">
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <div className="border-t border-t-gray-300">
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
