import React from "react"
import { Link } from "gatsby"

const BlogHeader = (props) => {
  return (
    <div class="mt-20 mb-36">
      <h1 class="uppercase text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:truncate sm:text-3xl sm:tracking-tight">
        <Link to="/">{props.title}</Link>
      </h1>
    </div>
  )
}

export default BlogHeader
