import React from "react"

const Grid = ({ columns, children, className = "", style }) => {
  // Map number of columns to corresponding Tailwind class with responsive breakpoints
  const getGridColsClass = (cols) => {
    const gridCols = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
      6: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6',
    }
    return gridCols[cols] || 'grid-cols-1'
  }

  return (
    <section 
      className={`grid ${getGridColsClass(columns)} ${className}`}
      style={style}
    >
      {children}
    </section>
  )
}

export default Grid
