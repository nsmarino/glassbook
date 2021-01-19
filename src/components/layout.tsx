import React from 'react'
import SEO from './seo'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import Header from './header'

const MainLayout: React.FC<{title:string}> = ({ children, title }) => {
  return (
  <>
    <SEO title={title} />
    <Header />    
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

