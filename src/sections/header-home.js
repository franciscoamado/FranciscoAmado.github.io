import React from "react"
import styled from "styled-components"
import ILink from "../components/a-link"
import Tag from "../components/tag"
import ThemeToggle from "../components/theme-toggle"

const HomeHeader = (props) => {
  return (
    <div class="my-36">
      <ThemeToggle />
      <h1 class="text-2xl/7 font-bold text-zinc-900 my-4 dark:text-zinc-100 sm:truncate sm:text-3xl sm:tracking-tight">
          {props.title}
      </h1>
      <h4 class="text-zinc-900 dark:text-zinc-100">from Porto 🇵🇹</h4>
      <h4 class="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
        I work at{" "}
        <Tag class="text-zinc-900 dark:text-zinc-100" text="Anchorage Digital" href="https://anchorage.com/" />{" "}
        as a Software Engineer, mostly in Go.
      </h4>
    </div>
  )
}

export default (props) => <HomeHeader {...props} />
