/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export const navButtonCSS = css`
  color: var(--textColor1);
  background: var(--accentColor);
  border: var(--border1);
  margin: 2rem;
  :hover {
    color: var(--accentColor);
    background: var(--textColor1);
  }
`