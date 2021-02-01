import React, { useRef } from "react"
import {Link} from 'gatsby'


/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import { under992, under768 } from '../components/styles/mediaQueries'

const SpindleCard = `
a {
  text-decoration: none;
  color: inherit;
}
margin-bottom: 1.25rem;
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
h2 {
  font-family: var(--bodyFont);
  font-size: 1.563rem;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 0.25rem;
}
.date {
  font-size: 0.8rem;
  font-family: var(--headerFont);
  color: hsl(60, 0%, 75%);
  opacity: 1;
  margin: 0;
}
p {
  color: hsl(60,0%,50%);
  font-size: 1rem;
  padding-right: 1rem;
  font-family: serif;
  margin: 0;
  line-height: 1.4rem;
  font-family: var(--headerFont);
  }
`
const altCard = `
a {
  text-decoration: none;
  color: inherit;
}
:hover {
  h2{
    text-decoration: underline;
  }
}
margin-bottom: 3.052rem;

h2 {
  font-size: 1.25rem;
  font-family: var(--bodyFont);
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 0.25rem;
}
.date {
  display: none;
}
p {
  color: black;
  opacity: 0.5;
  font-size: 1.25rem;
  padding-right: 1rem;
  font-family: serif;
  margin: 0;
  line-height: 1.4rem;
  font-family: var(--headerFont);
  span {
    display: none;
  }
  ::after {
    content: '...';
  }
  }

` 
const Card:React.FC<{scamp:string}> = ({ scamp }) => {
  return (
  <div className="card" css={css`
  ${scamp}
  `}>
        <Link to="/portfolio/site-redesign-dev-log-1">

    <p className="date">27 January 2021</p>

    <h2>Creating a Design System for This Website</h2>
    <p className="body">I am using the redesign of this site as an opportunity to</p>
    </Link>

  </div>
  )
}

const CSS_header =`
position: -webkit-sticky;
position: sticky;
top: 0px;

  display: flex;
  justify-content: space-between;
  margin-left: 12.5%;
  margin-right: 12.5%;
  font-family: var(--bodyFont);
  font-size: 3.052rem;
  ${under992} {
    margin-left: 0%;
    margin-right: 0%;
  }

  h1 {
    font-size: 3.052rem;
    align-self: flex-start;
    transform:translateX(-4px);
    opacity: 1;
    color: black;
    margin: 0;
    font-weight: normal;
  
    ${under992} {
      font-size: 1.563rem;
      transform: translateX(0px);  
    }
  }
  nav {
    color: black;
    text-align: right;
    font-family: var(--bodyFont);
    font-size: 3.052rem;

    p {
      margin: 0px;
      margin-bottom: 0.25rem;
      text-align: right;
      ${under992} {
        font-size: 1.563rem;
      }
    }
    p:hover {
      text-decoration: underline;
    }
    #selected::before {
      content: '·';
      text-decoration:none;
      display:inline-block;
      padding-right:1rem;
    }
`

const CSS_workSample = `
background: var(--bg);

padding-left: 12.5%;
padding-right: 12.5%;
${under768} {
  padding-left: 1%;
  padding-right: 1%;
}

  .proj {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3.052rem;
    margin-top: 0.25rem;
    * {
      margin-right: 0.512rem;
      margin-bottom: 0.512rem;
    }
    .textBox {
      font-family: var(--headerFont);
      width: 100px;
      height: fit-content;
      word-wrap: break-word;
      overflow: hidden;
      font-size: 1.25rem;
      opacity: 0.5;

      :hover {
        text-decoration: underline;
      } 
    }
    img {
      justify-self: start;
      align-self: start;
      flex-grow: 0;
      max-width: calc(100vw - 2%);
      :hover {
        filter: brightness(1.1);
        opacity: 0.8;
      }
    }

    h1 {
      margin-top: 0;
      font-family: var(--headerFont);
      font-weight: normal;
      opacity: 0.5;
      text-transform: uppercase;
      :hover {
        text-decoration: underline;
      }
    }
`

const CSS_blogList = `
  background: var(--bg);
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 12.5%;
  padding-right: 25%;
  ${under768} {
    padding-left: 1%;
    padding-right: 1%;
  }

  .card:hover {
    cursor: pointer;
    p, .date {
      opacity: 0.6;
    }

}

`

const CSS_footer = `
min-height: 50vh;
        position: sticky;
        bottom: 0;
        z-index: -10;

        background-image: repeating-linear-gradient(
          90deg
          , var(--bg), var(--bg) 6px, rgba(0,0,0,0.5) 7px);        
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 12.5%;
        padding-right: 12.5%;
        h1 {
          width: fit-content;
          font-family: var(--bodyFont);
          font-weight: normal;
          font-size: 2.441rem;
          background: var(--bg);
        }
        p {
          font-family: var(--headerFont);
          width: fit-content;
          background: var(--bg);
        }
        #social {
          text-decoration: underline;
        }
`

const ZenGarden = () => {
  const blogRef = useRef(null)
  const executeScroll = (ref:any) => ref.current.scrollIntoView()
  return (
    <div css={css`
      position: relative;
      top: 0;
      main {
        background: var(--bg);
      }
    `}>
      <header css={css`${CSS_header}`}>
        <h1>Nicholas Marino</h1>
        <nav>
          <p>Work Sample</p>
          <p id="selected">Blog</p>
          <p>About</p>
        </nav>
      </header>
      
      <main>

      <section id="workSample" css={css`${CSS_workSample}`}>
        <div className="proj">
        <h1>megalith</h1>
          <img src="https://source.unsplash.com/random/200x300" alt="unsplash"/>
          <div className="textBox">Creating A Design System For This Website</div>
          <img src="https://source.unsplash.com/random/100x200" alt="unsplash"/>
          <img src="https://source.unsplash.com/random/250x250" alt="unsplash"/>
        </div>
        <div className="proj">
        <h1>second.view</h1>
          <img src="https://source.unsplash.com/random/400x200" alt="unsplash"/>
          <img src="https://source.unsplash.com/random/200x200" alt="unsplash"/>
          <img src="https://source.unsplash.com/random/150x250" alt="unsplash"/>
        </div>
        <div className="proj">
        <h1>p5 tetris</h1>
          <img src="https://source.unsplash.com/random/300x200" alt="unsplash"/>
          <img src="https://source.unsplash.com/random/125x125" alt="unsplash"/>
          <div className="textBox">Using Design Patterns To Refactor</div>
          <img src="https://source.unsplash.com/random/250x200" alt="unsplash"/>
        </div>

      </section>
      
      <section id="blog" css={css`${CSS_blogList}`} ref={blogRef}>
        {/* <Card scamp={SpindleCard} />
        <Card scamp={SpindleCard} />
        <Card scamp={SpindleCard} />
        <Card scamp={SpindleCard} /> */}
        <Card scamp={altCard} />
        <Card scamp={altCard} />
        <Card scamp={altCard} />
        <Card scamp={altCard} />
        <Card scamp={altCard} />
      </section>
      
      </main>
      
      <footer id="about" css={css`${CSS_footer}`}>
        <h1>Nicholas Marino</h1>
        <p>Web developer and creative technologist based in Brooklyn, NY.</p>
        <p>Full stack web development, graphic and generative design, writings on code and art.</p>
      <div id="social">
      <p>Twitter</p>
      <p>Github</p>
      <p>Email</p>
      </div>

      </footer>

    </div>
  )
}

export default ZenGarden