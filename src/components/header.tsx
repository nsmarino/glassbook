import React from 'react'
import { Link } from "gatsby"

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { ul } from './styles/scratch'

const Header: React.FC = () => {
  return (
    <header css={css`
      position: sticky;
      top: 0;
      background: white;
      z-index: 100;
        ul {
          display: flex;
          border: 1px solid black;
          justify-content: center;
          ${ul}
          button {
            margin: 0;
            padding: 0;
          }
        }
    `}>
    <nav>
      <ul>
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
