import React from 'react'
import { Link } from "gatsby"

import Header from './header'

/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const layoutCSS = css`
`

const MainLayout: React.FC = ({ children }) => {
  return (
  <div css={layoutCSS}>
    <Header />
    {children}
  </div>
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