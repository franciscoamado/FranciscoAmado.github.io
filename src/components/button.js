import React from "react"

const Button = ({
  children,
  background = "black",
  color = "rgb(255, 255, 255)",
  fontSize = "15px",
  fontWeight = "600",
  radius = "6px",
  marginTop,
  marginBottom,
  className = "",
}) => (
  <button
    className={`
      block border-none text-center box-border no-underline px-6 py-2.5 
      cursor-pointer uppercase tracking-wider
      bg-[${background}] text-[${color}] text-[${fontSize}] font-[${fontWeight}] 
      rounded-[${radius}] mt-[${marginTop}] mb-[${marginBottom}]
      hover:shadow-[inset_0_0_100px_100px_rgba(255,255,255,0.25)]
      ${className}
    `}
  >
    {children}
  </button>
)

export default Button
