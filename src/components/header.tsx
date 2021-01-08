import React from 'react'
import { Link } from "gatsby"

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { navButtonCSS } from './styles/buttons'

const headerCSS = css`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 1rem;
`
const Header: React.FC = () => {
  return (
    <header css={headerCSS}>
    <nav> 
      <Link to="/"><button css={navButtonCSS}>portfolio</button></Link>
      <Link to="/devlogs"><button css={navButtonCSS}>devlogs</button></Link>
      <Link to="/about"><button css={navButtonCSS}>about</button></Link>
    </nav>
    </header>
)}

export default Header
