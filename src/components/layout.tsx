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

    svg {
      width: var(--xs);
      height: var(--xs);
      position: sticky;
      top: var(--xxs);
      left: calc(12.5% + var(--xxs));
      margin: var(--xxs);
    }
    svg:hover {
      polygon {
        stroke: var(--fontColor);
        stroke-width: 1;
        fill: white;
      }
    }
  `}>
    <SEO title={title} />
    <a href="/">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="24 24 52 52">
        <polygon points="25,75 25,50 50,25 75,50 75,75" fill="var(--fontColor)"/>
      </svg>
    </a>   
  {children}
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

