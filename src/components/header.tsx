import React from 'react'
import { Link } from "gatsby"

/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const headerCSS = css`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 1rem;
  z-index: 100;
`

const Header: React.FC = () => {
  return (
    <header css={headerCSS}>
    <nav> 
      <ul css={css`
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;

        li {
          margin: 1rem;
        }
        @media only screen and (min-width: 800px) {
          .aboutLink {
            display: none;
          }
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
