import React from "react"

const Grid = ({ children}) => {
  return (
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-12">
        {children}
      </div>
  )
}

export default Grid
