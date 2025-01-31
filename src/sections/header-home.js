import React from "react"
import ILink from "../components/a-link"
import Tag from "../components/tag"

const HomeHeader = (props) => {
  return (
    <div className="my-[15%]">
      <h1 className="uppercase p-0 mb-0">
        <ILink to="/" className="p-0">
          <div>{props.title}</div>
        </ILink>
      </h1>
      <h4>from Porto 🇵🇹</h4>
      <h4>
        I work at{" "}
        <Tag
          text="Anchorage Digital"
          href="https://anchorage.com/"
          background="#000000"
        />{" "}
        as a Software Engineer, mostly in Go.
      </h4>
    </div>
  )
}

export default (props) => <HomeHeader {...props} />
