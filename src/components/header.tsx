import React from 'react'
import { Link } from "gatsby"

/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const headerCSS = css`
position: fixed;
width: 100%;
top: 1rem;
z-index: 100;
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    display: inline;
    margin: var(--blockMargin);
    padding: 0;
    justify-self: start;
    a {
      color: inherit;
      text-decoration: inherit;
    }
  }
  @media only screen and (min-width: 800px) {
    h1 {display: none;}
    .aboutLink {
      display: none;
    }
  } 
`

const Header: React.FC = () => {
  return (
    <header css={headerCSS}>
    <nav>
      <h1><Link to="/">nmarino</Link></h1>
      <ul css={css`
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;

        li {
          margin: 1rem;
        }
      `}>
        <li>
        <Link to="/"><button>portfolio</button></Link>
        </li>
        <li>
        <Link to="/devlogs"><button>devlogs</button></Link>
        </li>
        <li className="aboutLink">
        <Link to="/about"><button>about</button></Link>
        </li>
      </ul>
    </nav>
    </header>
)}

export default Header
