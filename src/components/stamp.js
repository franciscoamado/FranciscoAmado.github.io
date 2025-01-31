import React from "react"

const Stamp = ({ text, color = "#000", fontSize = "1.3rem", className = "" }) => (
  <label
    className={`text-right font-mono text-[${color}] text-[${fontSize}] ${className}`}
  >
    {text}
  </label>
)

export default Stamp
