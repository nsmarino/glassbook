import React, { useState, useRef } from 'react'
import { Link } from "gatsby"

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
// import { LayoutChild } from './styles/scratch'

const btn = `
  width: 3rem;
  height: 2rem;
  color: var(--textColor);
  border: 2px solid rgba(0,0,0,0.25);
  font: var(--bodyFont);
  font-style: italic;
  background: var(--bg);
  font-size: 80%;
  opacity: 80%;
`

// const cssOpen = `
//   position: fixed;
//   width: 33%;
//   height: 50vh;

//   border: 2px solid rgba(0,0,0,1);
//   button {
//     width: 3rem;
//     height: 2rem;
//   }
// `
// const cssClosed = `
//   // border: 2px solid rgba(0,0,0,0.25);
// `

interface iBrowser {
  buttonText: string
  modalContent: React.ReactNode;
}

const Browser: React.FC<iBrowser> = ({ modalContent, buttonText }) => {
  const [modal, setModal] = useState(false)

  return (
  <div css={css`
    display: flex;
    justify-content: flex-end;
    text-align: right;
    background: var(--bg);
    z-index: 5;
    button {
      ${btn}
    }
  `}>
      <button onClick={()=>setModal(!modal)}>{modal?'close':buttonText}</button> 
    {modal && 
    <aside css={css`
    display: block;
    background: var(--bg);
    border: 2px solid rgba(0,0,0,1);
    position: fixed;
    top: 25vh;     
    left: 37.5vw;
    width: 25vw;

    `}>
      {modalContent}
    </aside>
    }
  </div>
)}

export default Browser
