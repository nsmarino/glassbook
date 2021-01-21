import React from 'react'
import { Link } from "gatsby"

import Browser from './ExpBrowser'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { Headline, Horizontal, LayoutChild, LinkHover, SmallLink, ulForLinks } from './styles/scratch'

const HeaderStyle = `
  ${LayoutChild}
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h1 {
    ${Headline}
    margin-top:3rem;
    margin-bottom:0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  ul {
      ${ulForLinks}
  }
  hr {
    ${Horizontal}  
  }
`

const Header: React.FC = () => {

  const activeLink = { 
    color: "var(--bg)", 
    background: 'var(--accentColor)', 
    textDecoration: 'none' 
  }

  return (
    <header css={css`
      ${HeaderStyle}
    `}>
      <h1>Nicholas Marino</h1>
      <p>web developer / creative technologist</p>
    <nav>
      <ul>
      <li>
        <Link to="/blog" activeStyle={activeLink}>blog</Link>
        </li>
        <li>
        <Link to="/" activeStyle={activeLink}>work</Link>
        </li>
        <li>
        <Link to="/about" activeStyle={activeLink}>about</Link>
        </li>
      </ul>
    </nav>
    <div className="sampleTest"></div>
    <Browser />
    <hr/>
    </header>
)}

export default Header
