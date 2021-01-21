import React, { useState } from 'react'
import { Link } from "gatsby"

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
// import { LayoutChild } from './styles/scratch'

const cssOpen = `
  border: 2px solid black;
  width: 50%;
  height: 50vh;
  background: var(--bg);
  z-index: 10;
    transform: scale(1);
`

const cssClosed = `
  border: 1px solid rgba(0,0,0,1);
  width: 3rem;
  height: 2rem;
  z-index: 1;
`

const Browser: React.FC = () => {
  const [modal, setModal] = useState(false)

  return (
  <div css={css`
    position: relative;
    display: flex;
    justify-content: flex-end;
    text-align: right;

    button {
      z-index: 5;
      width: 3rem;
      height: 2rem;
      color: var(--textColor);
      border: none;
      font: var(--bodyFont);
      font-style: italic;
      background: var(--bg);
      font-size: 80%;
      opacity: 80%;
      // ${modal && `visibility: hidden;`}
      span {
        font-style: normal;
        padding-left: 0.33rem;
      }
    }
  `}>
    <button onClick={()=>setModal(!modal)}>all <span>ᐯ</span></button>  
  <div css={css`
    ${modal ? cssOpen : cssClosed}
    transition: all 0.5s ease;
    transform-origin: top right;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
  `}
  >
    <button onClick={() => setModal(false)}>close</button>
    <h2>MODAL CONTENT</h2>
    <h2>MODAL CONTENT</h2>
    <h2>MODAL CONTENT</h2>
    <h2>MODAL CONTENT</h2>
    <h2>MODAL CONTENT</h2>
    <h2>MODAL CONTENT</h2>
    <h2>MODAL CONTENT</h2>
    <h2>MODAL CONTENT</h2>
    </div>
  </div>
)}

export default Browser
