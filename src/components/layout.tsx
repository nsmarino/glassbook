import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"

const MainLayout: React.FC = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
  <div>
    <header>
    <Link to="/">portfolio</Link>
    <Link to="/devlogs">devlogs</Link>
    <Link to="/about">about</Link>
    </header>
    {children}
  </div>
)}

export default MainLayout