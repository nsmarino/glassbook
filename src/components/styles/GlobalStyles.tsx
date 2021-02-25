import React from "react"
import "./globalstyles.css"
import "fontsource-open-sans" // Defaults to weight 400 with all styles included.
import "@fontsource/work-sans" // Defaults to weight 400 with all styles included.
import "@fontsource/inconsolata"

const GlobalStyles: React.FC = ({ children }) => {
  return (
    <>
    {children}
    </>
  )
}

export default GlobalStyles