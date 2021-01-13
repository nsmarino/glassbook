import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { block } from './styles/block'

const AboutContent: React.FC = () => {
  return (
    <>
      <h1>Nicholas Marino</h1>
      <p>Good looking and NICE too</p>
    </>
  )
}

export const AboutAside: React.FC = () => {
  return (
  <aside css={css`
    ${block}
    @media only screen and (max-width: 800px) {
        display: none;
    } 
  `}>
    <AboutContent />
    </aside>
  )
}

export const AboutMain: React.FC = () => {
  return (
  <main css={css`
    ${block}
  `}>
    <AboutContent />
  </main>
  )
}