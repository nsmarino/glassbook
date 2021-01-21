import React from 'react'
import { Link } from "gatsby"

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { ulForLinks, LayoutChild, Horizontal } from './styles/scratch'

const Footer: React.FC = () => (
  <footer css={css`
    ${LayoutChild}
    hr {
      ${Horizontal}
    }
    ul {
      ${ulForLinks}
    }
  `}>
    <hr/>
    <ul>
      <li><Link to="/">github</Link></li>
      <li><Link to="/">email</Link></li>
    </ul>
  </footer>
)

export default Footer
