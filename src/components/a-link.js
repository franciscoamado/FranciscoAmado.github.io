import React from "react"
import { Link } from "gatsby"

const ALink = ({ className = "", ...props }) => (
  <Link
    className={`text-[#323232] bg-transparent no-underline hover:opacity-80 transition-opacity ${className}`}
    {...props}
  />
)

export default ALink
