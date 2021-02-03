import React from 'react'
import { Link } from "gatsby"

/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const CSS_footer = `
  min-height: 50vh;
  position: sticky;
  bottom: 0px;
  z-index: -10;

  background-image: var(--stripes);     
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 12.5%;
  padding-right: 12.5%;
  h1 {
    width: fit-content;
    font-family: var(--sans);
    font-weight: normal;
    font-size: var(--xl);
    background: var(--bg);
  }
  p {
    font-family: var(--mono);
    font-size: var(--xs);
    width: fit-content;
    background: var(--bg);
  }
  #social {
    text-decoration: underline;
  }
`

const Footer: React.FC = () => (
  <footer css={css`${CSS_footer}`}>
    <h1>Nicholas Marino</h1>
    <p>Web developer and creative technologist based in Brooklyn, NY.</p>
    <p>Full stack web development, graphic and generative design, writings on code and art.</p>
    
    <div id="social">
      <p>Twitter</p>
      <p>Github</p>
      <p>Email</p>
    </div>
  </footer>
)

export default Footer
