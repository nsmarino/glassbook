import React from "react"

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import { over800, under800 } from '../components/styles/mediaQueries'
import { ulForLinks } from "../components/styles/scratch"

const SpindleCard = `
--testColor: hsl(260,90%,40%);
--testColorLight: hsl(260,20%,95%);
--testColorDark: hsl(260,90%,30%);
margin-bottom: 1.25rem;
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/merriweather/v22/u-440qyriQwlOrhSvowK_l5-fCZM.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
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

const Card:React.FC<{scamp:string}> = ({ scamp }) => {
  return (
  <div className="card" css={css`
  ${scamp}
  `}>
        <p className="date">27 January 2021</p>

    <h2>Creating a Design System for This Website</h2>
    <p className="body">I am using the redesign of this site as an opportunity to think more deliberately about interface design. This blog post serves as a development log to record for future reference...</p>
  </div>
  )
}

const ZenGarden = () => {

  return (
    <div css={css`
      position: relative;
      top: 0;
      main {
        background: var(--bg);
      }
      
      nav {
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        color: black;
        position: sticky;
        width: fit-content;
        top: 0rem;
        left: 100%;
        text-align: right;
        font-family: var(--bodyFont);
        font-size: 3.052rem;
        ${under800} {
          font-size: 1.953rem;
        }
        padding: 0.25rem;
        p {

          margin: 0;
          margin-bottom: 0.25rem;
          text-align: right;
        }
        p:hover::before {
          content: '·';
          text-decoration:none;
          display:inline-block;
        }
        #name {
          font-size: 1rem;
          font-family: var(--headerFont);
    font-weight: normal;
    :hover {
      text-decoration: underline;
    }
    
        }
        #selected {
          text-decoration: underline;
        }
      }
      .card:hover {
        cursor: pointer;

        p, .date {
          color: black
        }
      }
      #workSample {
        background: var(--bg);

        padding-left: 12.5%;
        padding-right: 12.5%;
.proj {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3.052rem;
  margin-top: 0.25rem;
  * {
    margin-right: 0.512rem;
    margin-bottom: 0.512rem;
  }
img {
  justify-self: start;
  align-self: start;
  flex-grow: 0;
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
}

      }
      #blog {
        background: var(--bg);
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 25%;
        padding-right: 25%;
      }

      #about {
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
      }
      header {
        position: fixed;
        margin-left: 12.5%;
        font-family: var(--bodyFont);
        font-size: 3.052rem;
        ${under800} {
          font-size: 1.953rem;
        }

      }
    `}>
      <header>Nicholas Marino</header>
      <main>
      <nav>
        <p>Work Sample</p>
        <p id="selected">Blog</p>
        <p>About</p>
      </nav>
      <section id="workSample">
        <div className="proj">
        <h1>megalith</h1>
          <img src="https://source.unsplash.com/random/200x300" alt="unsplash"/>
          <img src="https://source.unsplash.com/random/100x200" alt="unsplash"/>
          <img src="https://source.unsplash.com/random/250x250" alt="unsplash"/>
        </div>
        <div className="proj">
        <h1>second.view</h1>
          <img src="https://source.unsplash.com/random/400x200" alt="unsplash"/>
          <img src="https://source.unsplash.com/random/200x200" alt="unsplash"/>
          <img src="https://source.unsplash.com/random/150x250" alt="unsplash"/>
        </div>

      </section>
      <section id="blog">
        <Card scamp={SpindleCard} />
        <Card scamp={SpindleCard} />
        <Card scamp={SpindleCard} />
        <Card scamp={SpindleCard} />
        <Card scamp={SpindleCard} />
      </section>
      </main>
      <footer id="about">
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