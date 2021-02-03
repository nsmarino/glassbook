import React from 'react'
import SEO from './seo'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import Header from './Header'
import Footer from './Footer'

const Layout: React.FC<{title:string}> = ({ children, title, }) => {
  return (
  <div css={css`
    position: relative;
    top: 0;
    main {
      background: var(--bg);
    }
  `}>
    <SEO title={title} />
    <Header />
    {children}
    <Footer />
    <a id="about"></a>
  </div>
)}

export default Layout

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

