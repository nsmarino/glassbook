import React from "react"

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import { over800, under800 } from '../components/styles/mediaQueries'
import { ulForLinks } from "../components/styles/scratch"

const BlockCard = `
--light: hsl(60,0%,90%);
--dark: hsl(60,0%,0%);

@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/merriweather/v22/u-440qyriQwlOrhSvowK_l5-fCZM.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
  display: grid;

  background:hsl(60,0%,98%);;
  border: 2px solid black;
  margin-bottom: 4rem;
  grid-template-areas: 
    "headline"
    "body";
  h2 {
    grid-area: headline;
    color: black;
    background: white;
    font-family: "Merriweather";
    font-weight: normal;
    font-size:1.779rem;
    margin:0;
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 1rem;
    border: 2px solid var(--dark);
    transform: translateY(-1rem);
  }
  .body {
    grid-area: body;
    font-size: 1.1rem;
    color: black;
    font-family: "Roboto";
    margin: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    opacity: 0.95;
    line-height: 2;
  }
`

const Card:React.FC<{scamp:string}> = ({ scamp }) => {
  return (
  <div className="card" css={css`${scamp}`}>
    <h2>Creating a Design System for This Website</h2>
    <section className="body">
    <p>I am using the redesign of this site as an opportunity to think more deliberately about interface design. This blog post serves as a development log to record for future reference...</p>
    </section>
  </div>
  )
}

const ZenGarden = () => {
  return (
    <div css={css`
    margin: 0 auto;
    padding-left: 35%;
    padding-right: 35%;
    padding-top: 1rem;
    `}>
      <Card scamp={BlockCard} />
      <Card scamp={BlockCard} />
      <Card scamp={BlockCard} />
    </div>
  )
}

export default ZenGarden