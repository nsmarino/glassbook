import * as React from "react"

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

interface iCard {
  title: string
  subtitle: string
  squareImage: string
  rectImage: string
  body: string
  id: number
}

interface iAltCard {
  title: string
  images: string[]
  id: number
}

const css_I = `
margin: 0 auto;
width: 50%;
.bio {
  margin-bottom: var(--xxl);
  h1 {
    width: 66%;
    font-size: var(--xxl);
  }
  p {
    width: 66%;
    margin-left: 33%;
    text-align: right;
    line-height: 1.5;
    font-family: monospace;
  }
}
section {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--xxl);
  h2 {
    font-size: var(--l);
    font-weight: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 0;
  }
  h3 {
    font-size: var(--xs);
    font-weight: normal;
    font-family: monospace;
    opacity: 0.8;
  }
  .textBox {
    width: 33%;
  }
  img {
    width: 66%;
  }
  p {
    display: none;  
  }
}

.alpha {
  flex-direction: row-reverse;
  h2, h3 {
    text-align: right;
  }
}
.beta {
}
`

const css_II = `
margin: 0 auto;
width: 50%;
.bio {
  font-family: serif;
  position: sticky;
  top: 0;
  background: white;
  margin-bottom: var(--xxl);
  margin-top: var(--xxl);

  h1 {
margin:0;    font-size: var(--xs);
  }
  p {
    display: inline;
    font-size: var(--xs);
  }
}

section {
  margin-bottom: var(--xxl);
  h2 {
    font-size: 5.96rem;
    margin: 0;
    text-transform: uppercase;
  }
  h3 {
    display: none;
  }
  img {
    width: 100%;
  }
  p {
    font-size: var(--l);
    margin: 0;
    font-family: serif;
    font-style: italic;
    padding-bottom: var(--xxl);

    border-bottom: 1px solid grey;
  }
}
`

const css_III = `
margin: 0 auto;
width: 50%;
.bio {
  display: flex;
  justify-content: space-between;
  * {
    width: 33%;
    margin: 0;
  }
  h1 {
    font-weight: normal;
  }
  p {
    text-align: right;
    font-size: var(--xxs);
    line-height: 2;
  }
}

section {
  display: grid;
  grid-template-areas: "container";
  img {
    grid-area: container;
    width: 100%;
    z-index: 1;
  }
  .textBox {
    grid-area: container;
    z-index: 2;
    justify-self: center;
    align-self: center;
    width: 400px;
    height: 200px;
    background: white;
    font-family: monospace;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 50px;
    padding-right: 50px;
    h2,h3 {
      margin: 0;
    }
    h3 {
      font-weight: normal;
    }
  }
  p {
    display: none;
  }
}
`
const css_IV = `
display: flex;
flex-direction: column;
align-items: center;

nav {
  width: 50%;
  display: flex;
  position: sticky;
  top: 0;
  background: white;
  justify-content: space-around;
  .sort {
    border-bottom: 1px dotted black;
  }
  .pageLink {
    border-bottom: 1px solid black;
  }
  a {
    font-family: serif;
    font-size: var(--s);
  }
}
section {
  width: 50%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-family: var(--mono);
    font-weight: normal;
    font-size: var(--m);
    margin-bottom: var(--xxs);
  }
  .flexContainer {
    display: flex;
  
  img {
      width: calc(33.33% - var(--xxs));
      margin-right: var(--xxs);
      margin-top: 0;
      align-self:flex-start   
    }
    p {
      display: none;
    }
  }
  
}
`
const css_V = `
display: grid;
grid-template-columns: 10% 90%;

nav {
  width: fit-content;
  height: fit-content;
  justify-self: center;
  display: flex;
  flex-direction: column;
  background: white;
  justify-content: space-around;
  .sort {
    border-bottom: 1px dotted black;
  }
  .pageLink {
    border-bottom: 1px solid black;
  }
  a {
    font-family: serif;
    font-size: var(--s);
  }
}
main {
  height: 100vh;
  overflow-y: scroll;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  ::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
}
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: var(--xxl);
  h2 {
    font-family: sans-serif;
    font-weight: normal;
    font-size: var(--xxs);
    text-transform: uppercase;
    margin-bottom: var(--xxs);
  }
  .flexContainer {
    display: flex;
    justify-content: flex-start;
  
  img {
      width: 33.33%;
      margin-top: 0;
      align-self:flex-start   
    }
    p {
      display: none;
    }
  }
  
}
`

const cards = [
  {
    title: 'Blog Post',
    subtitle: 'Subtitle with more information about project',
    squareImage: 'https://source.unsplash.com/random/400x400', // 1:1 aspect ratio
    rectImage: 'https://source.unsplash.com/random/400x200?computer', // 1:2 aspect ratio
    body: 'First sentence of opening paragraph that gives a sense of the contents',
    id: 1
  },
  {
    title: 'Title',
    subtitle: 'Subtitle with more information',
    squareImage: 'https://source.unsplash.com/random/400x400', // 1:1 aspect ratio
    rectImage: 'https://source.unsplash.com/random/400x200?sad', // 1:2 aspect ratio
    body: 'First sentence of opening paragraph that gives a sense of the contents',
    id: 2,
  },
  {
    title: 'Title',
    subtitle: 'Subtitle with more information',
    squareImage: 'https://source.unsplash.com/random/400x400', // 1:1 aspect ratio
    rectImage: 'https://source.unsplash.com/random/400x200', // 1:2 aspect ratio
    body: 'First sentence of opening paragraph that gives a sense of the contents',
    id: 3,
  },
  {
    title: 'Title',
    subtitle: 'Subtitle with more information',
    squareImage: 'https://source.unsplash.com/random/400x400', // 1:1 aspect ratio
    rectImage: 'https://source.unsplash.com/random/400x200', // 1:2 aspect ratio
    body: 'First sentence of opening paragraph that gives a sense of the contents',
    id: 4,
  },
  {
    title: 'Title',
    subtitle: 'Subtitle with more information',
    squareImage: 'https://source.unsplash.com/random/400x400', // 1:1 aspect ratio
    rectImage: 'https://source.unsplash.com/random/400x200', // 1:2 aspect ratio
    body: 'First sentence of opening paragraph that gives a sense of the contents',
    id: 5,
  },
  {
    title: 'Title',
    subtitle: 'Subtitle with more information',
    squareImage: 'https://source.unsplash.com/random/400x400', // 1:1 aspect ratio
    rectImage: 'https://source.unsplash.com/random/400x200', // 1:2 aspect ratio
    body: 'First sentence of opening paragraph that gives a sense of the contents',
    id: 6,
  },
]

const altCards = [
  {
    title: 'Interactive SVGs with React Custom Hooks and Greensock',
    subtitle: 'Subtitle with more information about project',
    images: ['https://source.unsplash.com/random/400x400', 'https://source.unsplash.com/random/400x200','https://source.unsplash.com/random/500x300'],
    id: 1
  },
  {
    title: 'Tetris Clone with p5.js and Object Oriented Programming',
    subtitle: 'Subtitle with more information about project',
    images: ['https://source.unsplash.com/random/400x400', 'https://source.unsplash.com/random/400x200','https://source.unsplash.com/random/500x300'],
    id: 2
  },
  {
    title: 'E-Commerce with Printful, Stripe, and React/NodeJS',
    subtitle: 'Subtitle with more information about project',
    images: ['https://source.unsplash.com/random/400x400', 'https://source.unsplash.com/random/400x200','https://source.unsplash.com/random/500x300'],
    id: 3
  },
  {
    title: 'Social Media App with React/Node, JWT and PostgreSQL',
    subtitle: 'Subtitle with more information about project',
    images: ['https://source.unsplash.com/random/400x400', 'https://source.unsplash.com/random/400x200','https://source.unsplash.com/random/500x300'],
    id: 4
  },
  {
    title: 'Optimizing Conways Game of Life in p5.js',
    subtitle: 'Subtitle with more information about project',
    images: ['https://source.unsplash.com/random/400x400', 'https://source.unsplash.com/random/400x200','https://source.unsplash.com/random/500x300'],
    id: 5
  },
]

const Bio: React.FC = () => {
  return (
    <div className="bio">
	    <h1>Nicholas Marino </h1>
      <p>Freelance React/NodeJS. Interested in game design, artificial life, and the presentation of information.</p>
    </div>
  )
}
const Nav: React.FC = () => {
  return (
    <nav>
      <a className="pageLink">Nicholas Marino</a>
      <a className="sort">Websites</a>
      <a className="sort">Games</a>
      <a className="sort">Experiments</a>
      <a className="pageLink">Contact</a>
    </nav>
  )
}

const Card:React.FC<{card: iCard, alt: Boolean}> = ({ card, alt }) => {
  return (
    <section className={card.id%2===1 ? 'alpha' : 'beta'}>
      <div className="textBox">
        <h2>{card.title}</h2>
        <h3>{card.subtitle}</h3>
      </div>
      <img src={card.rectImage} alt={card.subtitle}/>
      <p>{card.body}</p>
    </section>
  )
}

const AltCard:React.FC<{card: iAltCard,}> = ({ card }) => {
  return (
    <section>
      <h2>{card.title}</h2>
      <div className="flexContainer">
        {card.images.map(i=> <img src={i} alt={card.title} key={i} />)}
      </div>
    </section>
  )
}


const Garden = () => {
  return (
    <>
    <div css={css`
      ${css_I}

    `}>
      <Bio />
      {cards.map(card => <Card card={card} alt={true} key={card.id} />)}
    </div>

  <hr/>

    <div css={css`
      ${css_II}
    `}>
      <Bio />
      {cards.map(card => <Card card={card} alt={true} key={card.id} />)}
    </div>

  <hr/>

    <div css={css`
      ${css_III}
    `}>
      <Bio />
      {cards.map(card => <Card card={card} alt={true} key={card.id} />)}
    </div>

    <hr/>

    <div css={css`
      ${css_IV}
    `}>
      <Nav />
      {altCards.map(card => <AltCard card={card} key={card.id} />)}
    </div>
    <hr/>

    <div css={css`
      ${css_V}
    `}>
      <Nav />
      <main>
      {altCards.map(card => <AltCard card={card} key={card.id} />)}
      </main>
    </div>
    </>
  )
}

export default Garden