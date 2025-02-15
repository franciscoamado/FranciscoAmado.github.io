import React from "react"

const Tag = (props) => {
  return (
      <a class="underline underline-offset-2 hover:no-underline text-zinc-900 dark:text-zinc-100" props={props} href={`${props.href}`} target="_blank">
        {props.text}
      </a>
  )
}

export default (props) => <Tag {...props} />
