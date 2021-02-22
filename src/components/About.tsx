import React from 'react'
import { Link } from "gatsby"

/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const CSS_about = `
padding-left: 12.5%;
padding-right: 12.5%;
h1 {
  width: fit-content;
  font-family: var(--sans);
  font-weight: normal;
  font-size: var(--xl);
  background: var(--fg);
  margin: 0;
  padding: var(--xxs);
  margin-bottom: var(--m);
}
p {
  font-family: var(--mono);
  font-size: var(--xs);
  width: fit-content;
  margin: 0;
  background: var(--fg);
  color: var(--fontColor);
  margin-bottom: var(--xxs);
  padding: var(--xxs);
}
#social {
  display: flex;
  margin-bottom: var(--m);
  margin-left: var(--xxs);

  a {
    margin-right: var(--m);
    font-family: var(--mono);
    font-size: var(--xxs);
    width: fit-content;
    background: var(--fg);
    color: var(--fontColor);
  }
  a:hover {
    background: var(--fontColor);
    color: var(--bg);
  }
}
`

const About: React.FC = () => (
  <aside css={css`${CSS_about}`}>
    <h1>Nicholas Marino, web developer</h1>
    <p>Freelance React/NodeJS. Interested in game design, artificial life, and the presentation of information.</p>
    
    <div id="social">
      <a href="https://twitter.com/yard__">Twitter</a>
      <a href="https://github.com/nsmarino">Github</a>
      <a href="mailto:contact@nmarino.dev">Email</a>
    </div>
  </aside>
)

export default About