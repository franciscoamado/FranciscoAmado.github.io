import React from "react"
import { Link } from "gatsby"

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
        <h2 class="text-2xl/7 font-bold text-zinc-900 sm:truncate sm:text-3xl sm:tracking-tight">
          <Link to={`/blog/`} >
            {title}
          </Link>
        </h2>
      )
    }

    return (
      <div class="flex">
        <div class="mx-auto max-w-screen-xl px-8">
          <header class="text-zinc-900 dark:text-zinc-100">{header}</header>
          <main class="text-zinc-900 dark:text-zinc-100">{children}</main>
          <Footer class="mt-500"/>
        </div>
      </div>
    )
  }
}

export default Layout
