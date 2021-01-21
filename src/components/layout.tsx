import React from 'react'
import SEO from './seo'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import Header from './Header'
import Footer from './Footer'

const MainLayout: React.FC<{title:string}> = ({ children, title }) => {
  return (
  <div css={css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
  `}>
    <SEO title={title} />
    <Header /> 
    {children}
    <Footer />
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

