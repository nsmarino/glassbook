import * as React from "react"

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
const css_Nav = ` 
nav {
  grid-column: 3/4;
    a {
      display: block;
      font-family: var(--mono);
      color: var(--testAccentColor);
      text-align: right;
      padding: var(--xxs);
      text-transform: capitalize;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
    a:first-of-type {
      color: var(--testFontColor);
    }
  }`

const css_Main = `
main {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  article {
    grid-column:2/3;
    img {
      width: 100%;
    }
    h1 {
      font-family: var(--sans);
      color: var(--testFontColor);
      font-size: var(--s);
      font-weight: normal;
      margin-top: var(--xl);
      margin-bottom: 0;
    }
    .sub {
        color: var(--testAccentColor);
        font-size: var(--s);
        margin:0;
        margin-top: 0.41rem;
        margin-bottom: var(--xl);
        font-family: var(--sans);
    }
    .body {
      color: var(--testFontColor);
      font-size: var(--xs);
      font-family: var(--mono);
      line-height: 1.5;
      margin:0;
      margin-bottom: var(--xxs);
      a {
        color: var(--testFontColor);
        text-decoration: none;
        border-bottom: 1px solid var(--testFontColor);
        :hover {
          color: var(--testHover);
        }
      }
    }
  }
    h2 {
      color: var(--testAccentColor);
      font-size: var(--xs);
      font-family: var(--mono);
      font-weight: normal;
      margin:0;
      margin-top: var(--m);
      margin-bottom: 0.41rem;
    }
 ${css_Nav}
}
`
const css_EU = `
--test: #222;
--testFontColor: lightgrey;
--testAccentColor: grey;
--testHover: white;
--testBorder: 1px solid grey;
background: var(--test);
padding-bottom: var(--m);
min-height: 100vh;

header {
  position: sticky;
  top: 0;
  height: var(--xxl);
  border-bottom: var(--testBorder);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: var(--test);
  a {
    color: var(--testFontColor);
    padding: var(--xxs);
    font-family: var(--sans);
    :hover {
      color: var(--testHover);
      cursor: pointer;
    }
  }
  
  .home {
    margin-right: auto;
    svg {
    fill: var(--testFontColor);
    // stroke-width: 3px;
    width: var(--xs);
    height: var(--xs);
    }
    :hover {
      svg {
      fill: var(--testHover);
      }
    }
  }
}

${css_Main}
`

const NavBar: React.FC = () => {
  return (
    <header>
      <a href="/" className="home">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="24 24 52 52">
        <polygon points="25,75 25,50 50,25 75,50 75,75" />
      </svg>
      </a>   
      <a className="pageLink">Email</a>
      <a className="pageLink">Github</a>
      <a className="pageLink">Are.na</a>
      <a className="pageLink">Twitter</a>
    </header>
  )
}

const ZenBlog = () => {
  return (
    <div css={css`
      ${css_EU}
    `}>
      <NavBar />
      <main>
      <article>
        <img src="https://source.unsplash.com/random/1200x400?nature" alt="sample img"/>
        <h1>Point-and-Click SVG with React Custom Hooks and Greensock</h1>
        <p className="sub">February 2021</p>
        <h2>Overview</h2>
        <p className="body">First, I wanted to learn how to use <a href="/">Greensock</a> and React together. Greensock is a great animation library but it is not designed to be used with React, and I wanted to write some code that would integrate the two and allow me to use the best features from each.</p>
        <p className="body">Second, I have long been curious about SVG and its potential for interactivity. If React is a framework for building interactive user interfaces, and SVG is a image format that supports interactivity and animation, it seemed to me that they could be used together to create point-and-click games reminiscent of early Flash games.</p>
        <p className="body">SVG stands for 'Scalable Vector Graphics,' and I remain fascinated by the way that you can resize or zoom into SVG images and they remain crisp and clear. This seemed loaded with gameplay potential.</p>
        <h2>Idea for structure of game</h2>
        <p className="body">Like many modern game developers, I was heavily inspired by the</p>
      </article>
      <nav>
        <a href="/">introduction</a>
        <a href="/">section a</a>
        <a href="/">section b</a>
        <a href="/">section c</a>
        <a href="/">section d</a>
        <a href="/">section e</a>
      </nav>
      </main>   
    </div>
  )
}

export default ZenBlog