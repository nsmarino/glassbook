import React, { useEffect, useRef } from 'react'
import { Link } from "gatsby"

/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { under992 } from './styles/mediaQueries'

const CSS_header = `
margin-left: 12.5%;
position: -webkit-sticky;
position: sticky;
top: 0px;
z-index: 999;
width: fit-content;
font-family: var(--sans);
margin-bottom: calc(var(--xxl) * 2 + 0.75rem);
a {
  text-decoration: none;
  color: inherit;
}
${under992} {
  margin-left: 0%;
  margin-right: 0%;
  margin-bottom: calc(var(--l) * 2 + 0.5rem);
}

h1 {
  font-size: var(--xxl);
  margin: 0;
  font-weight: normal;
  ${under992} {
    font-size: var(--l);
    max-width: 50vw;
  }
}

nav {
  color: black;
  font-family: var(--sans);
  font-size: var(--xxl);
  position: fixed;
  top: 0;
  right: 12.5%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${under992} {
    right: 0%;

  }
  p {
    margin: 0px;
    margin-bottom: 2px;
    ${under992} {
      font-size: var(--l);
    }
  }
  p:hover {
    text-decoration: underline;
  }
}

`
const testHeader = `
margin-left: 12.5%;
position: fixed;
top: 0px;
z-index: 999;
width: fit-content;
font-family: var(--sans);

margin-bottom: calc(var(--xxl) * 2 + 0.75rem);
a {
  text-decoration: none;
  color: inherit;
}
${under992} {
  margin-left: 0%;
  margin-right: 0%;
  margin-bottom: calc(var(--l) * 2 + 0.5rem);
}

h1 {
  font-size: var(--xxl);
  margin: 0;
  font-weight: normal;
  ${under992} {
    font-size: var(--l);
    max-width: 50vw;
  }
  :hover {
    opacity: 0.5;
  }
}

nav {
  color: black;
  font-family: var(--sans);
  font-size: var(--xxl);
  position: fixed;
  top: 0;
  right: 12.5%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${under992} {
    right: 0%;

  }
  p {
    margin: 0px;
    margin-bottom: 2px;
    ${under992} {
      font-size: var(--l);
    }
  }
  p:hover {
    opacity: 0.5;
  }
}

`

const Header: React.FC = () => {
  return (
    <header css={css`${testHeader}`}> 
      <h1><Link to="/">Nicholas Marino</Link></h1>
      <nav>
        <p><Link to="/#workSample">Recent Work</Link></p>
        <p><Link to="/#blog">Blog</Link></p>
        <p><Link to="/#about">About</Link></p>
      </nav>
    </header>
  )
}

export default Header
