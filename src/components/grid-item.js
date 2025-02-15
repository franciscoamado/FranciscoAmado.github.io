import React from "react"

const Item = ({ title, subtitle, caption, children }) => {
  return (
      <div class="mb-6 text-zinc-900 dark:text-zinc-100">
        <h5 class="font-semibold text-zinc-900 dark:text-zinc-100">{title}</h5>
        <div class="mt-2 mb-4">
          <p class="font-mono text-xs">{subtitle}</p>
          <p class="font-mono text-xs">{caption}</p>
        </div>
        {children}
      </div>
  )
}

export default Item
