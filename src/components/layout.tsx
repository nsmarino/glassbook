import React from 'react'
import { Link } from "gatsby"

import Header from './header'

import SEO from './seo'

const MainLayout: React.FC<{title:string}> = ({ children, title }) => {
  return (
  <>
    <Header />
    <SEO title={title} />
    {children}
  </>
)}

export default MainLayout

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

//   const Container = (position: string) => (
//     <div css={{
//       display: flex,     
//       flexDirection: ${({ position }) => (position === "top" ? "column" : "row")},
//       margin: ${({ position }) => (position === "top" ? "40px" : "0")}
//     }}/>
//   )
//  `;

