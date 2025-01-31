import React from "react"
import ILink from "../components/a-link"

const BlogHeader = (props) => {
  return (
    <div className="my-[15%]">
      <h1 className="uppercase">
        <ILink to="/">{props.title}</ILink>
      </h1>
    </div>
  )
}

export default (props) => <BlogHeader {...props} />
