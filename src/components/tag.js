import React from "react"

const Tag = ({ href, text, background = "transparent", color = "white" }) => {
  const baseStyle = `bg-[${background}] text-[${color}] no-underline font-bold cursor-pointer rounded hover:opacity-80 transition-opacity`
  
  return (
    <span className={baseStyle}>
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={baseStyle}
      >
        {text}
      </a>
    </span>
  )
}

export default Tag
