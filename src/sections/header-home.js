import React from "react"
import Tag from "../components/tag"
import ThemeToggle from "../components/theme-toggle"

const HomeHeader = (props) => {
  return (
    <div class="mt-36 mb-24">
      <ThemeToggle />
      <h1 class="text-2xl font-bold text-zinc-900 my-4 dark:text-zinc-100 sm:truncate sm:text-3xl sm:tracking-tight">
          {props.title}
      </h1>
      <h4 class="text-zinc-900 dark:text-zinc-100">from Porto 🇵🇹</h4>
      <h4 class="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
        I work at{" "}
        <Tag class="text-zinc-900 dark:text-zinc-100" text="Anchorage Digital" href="https://anchorage.com/" />{" "}
        as a Software Engineer, mostly in Go.
      </h4>
      <div class="mt-16">
        <h5 class="text-zinc-900 dark:text-zinc-100 font-semibold mb-3">Ideas I'm actively exploring:</h5>
        <ul class="text-zinc-900 dark:text-zinc-100 grid grid-cols-2 md:grid-cols-3 gap-x-2 leading-tight">
          <li class="mb-0">• Distributed systems patterns</li>
          <li class="mb-0">• Authorization systems</li>
          <li class="mb-0">• Go performance optimization</li>
          <li class="mb-0">• Zero-trust models</li>
          <li class="mb-0">• Brandon Sanderson</li>
          <li class="mb-0">• Craft Beer</li>
        </ul>
      </div>
    </div>
  )
}

export default HomeHeader
