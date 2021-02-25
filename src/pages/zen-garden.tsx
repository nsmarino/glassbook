import * as React from "react"

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

interface iCard {
  title: string
  subtitle: string
  images: string[]
  id: number
}

const css_IV = `
--test: #222;
--testFont: lightgrey;
--testBorder: 4px solid lightgrey;
display: flex;
flex-direction: column;
align-items: center;
background: var(--test);
nav {
  width: 75%;
  display: flex;
  position: sticky;
  border-bottom: var(--testBorder);
  top: 0;
  background: var(--test);
  justify-content: space-between;
  .sort {
display: none;  }
  .pageLink {
  }
  a {
    font-family: Arial;
    font-size: var(--xxl);
    color: var(--testFont);
  }
}
section {
  :hover {
    cursor: pointer;
  }
  width: 75%;
  border-bottom: 2px solid lightgrey;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  h2 {
    font-family: monospace;
    font-weight: normal;
    color: var(--testFont);
    font-size: var(--xs);
    margin-top: var(--xxs);
    margin-bottom: var(--xxs);
  }
  .flexContainer {
    display: flex;
    // width: 75%;
    margin-top: var(--xxs);
    img {
      height: calc(var(--xxl) * 4);
      // min-width: 0;
      // max-width: calc(1fr - var(--xxs));
      margin-right: var(--xxs);
      object-fit: cover;
      align-self:flex-end;   
      }
  }
  
}
`

const css_IV_maximalist = `
--test: white;
--testFont: black;
--testBorder: 4px solid black;
display: flex;
flex-direction: column;
align-items: center;
background: var(--test);
nav {
  width: 75%;
  display: flex;
  position: sticky;
  border-bottom: var(--testBorder);
  top: 0;
  background: var(--test);
  align-items: center;
  justify-content: space-between;
  .sort {
display: none;  }
  .pageLink {
  }
  a {
    font-family: Arial;
    font-size: var(--xxl);
    color: var(--testFont);
  }
  button {
    font-family: Arial;
    font-size: var(--m);
    border: 2px solid black;
    background: white;
    margin: 0;
    padding: 0;
    width: calc(var(--xxl)*3);
    height: var(--xl); 
  }
}
section {
  :hover {
    cursor: pointer;
    background: hsl(0,0%, 98%);
  }
  width: 50%;
  border-bottom: 4px solid black;
  border-left: var(--testBorder);
  border-right: var(--testBorder);
  padding-left: var(--xxs);
  padding-right: var(--xxs);
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-family: var(--mono);
    font-weight: normal;
    color: black;
    font-size: var(--s);
    margin-bottom: 0;

  }
  p {
    width: 100%;
    margin-bottom: var(--xxs);
    margin-top: var(--xxs);

    color: grey;
    font-family: var(--mono);
    font-size: var(--xs);
    text-align: justify;
    line-height: 1.5;
  }
  .flexContainer {
    display: flex;
    // width: 75%;
    img {
      height: calc(var(--xxl) * 2);
      // min-width: 0;
      // max-width: calc(1fr - var(--xxs));
      margin-right: var(--xxs);
      margin-top: var(--xxs);

      object-fit: cover;
      align-self:flex-end;   
      }
  }
}
`

const css_EU = `
--test: #222;
--testFont: lightgrey;
--testBorder: 1px solid grey;
background: var(--test);
padding-bottom: var(--m);

nav {
  position: sticky;
  top: 0;
  height: var(--xxl);
  border-bottom: var(--testBorder);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: var(--test);
  a {
    color: var(--testFont);
    padding: var(--xxs);
    :hover {
      color: white;
      cursor: pointer;
    }
  }
  
  .home {
    margin-right: auto;
    svg {
    fill: var(--testFont);
    // stroke: var(--testFont);
    // stroke-width: 3px;
    width: var(--xs);
    height: var(--xs);
    }
    :hover {
      svg {
      fill: white;
      }
    }
  }
}
main {
  width: 40%;
  margin-left: 20%;
  .bio {
    text-align: center;
    img {
      width: 100%;
    }
    h1 {
      color: var(--testFont);
      font-size: var(--s);
      font-weight: normal;
      text-transform: lowercase;
    }
    p {
      color: grey;
      font-size: var(--xs);
      font-family: var(--mono);
      text-transform: lowercase;
    }
  }
  .work {
    h2 {
      color: grey;
      font-size: var(--xs);
      font-family: Arial;
      font-weight: normal;
      margin-bottom: var(--m);
    }
    section {
      display: flex;
      align-items: center;
      :hover {
        cursor: pointer;
        h3 {
          color: white;
        }
        p {
          color: lightgrey;
        }
      }
      img {
        width: 75px;
        border-radius: 5px;
      }
      margin-bottom: var(--m);
      h3 {
        color: var(--testFont);
        font-size: var(--xs);
        font-family: Arial;
        font-weight: 500;
        margin: 0;
        margin-bottom: 0.41rem;

        margin-left: var(--xs);
        }
      p {
        color: grey;
        font-size: var(--xs);
        font-family: Arial;
        font-weight: 200;
        margin-bottom: 0;
        margin-top: 0.41rem;
        margin-left: var(--xs);
      }
    }
  }
  section:last-of-type {
    margin-bottom: 0;  
  }
}
`

const cards = [
  {
    title: 'Interactive SVGs with React Hooks and Greensock',
    subtitle: 'Website',
    images: [
      'https://source.unsplash.com/random/400x400?mountain', 
      'https://source.unsplash.com/random/400x200?desert',
      'https://source.unsplash.com/random/500x300?beach'],
    id: 1
  },
  {
    title: 'Tetris Clone with p5.js and Object Oriented Programming',
    subtitle: 'Game',
    images: [
      'https://source.unsplash.com/random/200x200?computer',
      'https://source.unsplash.com/random/100x200?game',
      'https://source.unsplash.com/random/100x200?technology',
    ],
    id: 2
  },
  {
    title: 'E-Commerce with Printful, Stripe, and React/NodeJS',
    subtitle: 'Website',
    images: ['https://source.unsplash.com/random/400x400', 'https://source.unsplash.com/random/400x200','https://source.unsplash.com/random/500x300'],
    id: 3
  },
  {
    title: 'Social Media App with React/Node, JWT and PostgreSQL',
    subtitle: 'Website',
    images: ['https://source.unsplash.com/random/400x400', 'https://source.unsplash.com/random/400x200','https://source.unsplash.com/random/500x300'],
    id: 4
  },
  {
    title: 'Optimizing Conways Game of Life in p5.js',
    subtitle: 'Experiment',
    images: ['https://source.unsplash.com/random/400x400', 'https://source.unsplash.com/random/400x200','https://source.unsplash.com/random/500x300'],
    id: 5
  },
]
const maximalistCards = [
  {
    title: 'Interactive SVGs with React Hooks and Greensock',
    subtitle: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.',
    images: [
      'https://source.unsplash.com/random/400x400?mountain', 
      'https://source.unsplash.com/random/400x200?desert',
      'https://source.unsplash.com/random/500x300?beach'],
    id: 1
  },
  {
    title: 'Tetris Clone with p5.js and Object Oriented Programming',
    subtitle: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.',
    images: [
      'https://source.unsplash.com/random/100x200?computer',
      'https://source.unsplash.com/random/100x200?game',
      'https://source.unsplash.com/random/100x200?technology',
    ],
    id: 2
  },
  {
    title: 'E-Commerce with Printful, Stripe, and React/NodeJS',
    subtitle: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.',
    images: ['https://source.unsplash.com/random/400x400', 'https://source.unsplash.com/random/400x200','https://source.unsplash.com/random/500x300'],
    id: 3
  },
  {
    title: 'Social Media App with React/Node, JWT and PostgreSQL',
    subtitle: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.',
    images: ['https://source.unsplash.com/random/400x400', 'https://source.unsplash.com/random/400x200','https://source.unsplash.com/random/500x300'],
    id: 4
  },
  {
    title: 'Optimizing Conways Game of Life in p5.js',
    subtitle: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.',
    images: ['https://source.unsplash.com/random/400x400', 'https://source.unsplash.com/random/400x200','https://source.unsplash.com/random/500x300'],
    id: 5
  },
]

const Bio: React.FC = () => {
  return (
    <div className="bio">
      <img src="https://source.unsplash.com/random/1200x400?nature" alt="sample img"/>
      {/* <img src="https://source.unsplash.com/random/200x200?nature" alt="sample img"/>  */}
      <h1>Nicholas Marino </h1>
      <p>web developer</p>
    </div>
  )
}

const Nav: React.FC = () => {
  return (
    <nav>
      <a className="pageLink">Nicholas Marino</a>
      <a className="pageLink">Options</a>
    </nav>
  )
}
const NavBar: React.FC = () => {
  return (
    <nav>
      <a href="/" className="home">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="24 24 52 52">
        <polygon points="25,75 25,50 50,25 75,50 75,75" />
      </svg>
      </a>   
      <a className="pageLink">Email</a>
      <a className="pageLink">Github</a>
      <a className="pageLink">Are.na</a>
      <a className="pageLink">Twitter</a>
    </nav>
  )
}



const Card:React.FC<{card: iCard,}> = ({ card }) => {
  return (
    <section>
      <h2>{card.title}</h2>
      <div className="flexContainer">
        {card.images.map(i=> <img src={i} alt={card.title} key={i} />)}
      </div>
    </section>
  )
}
const EUCard:React.FC<{card: iCard,}> = ({ card }) => {
  return (
    <section>
      <img src={card.images[0]} alt={card.title} />
      <div>
      <h3>{card.title}</h3>
      <p>{card.subtitle}</p>
      </div>
    </section>
  )
}



const MaxCard:React.FC<{card: iCard,}> = ({ card }) => {
  return (
    <section>
      <div className="flexContainer">
        {card.images.map(i=> <img src={i} alt={card.title} key={i} />)}
      </div>
      <h2>{card.title}</h2>
      <p>{card.subtitle}</p>
    </section>
  )
}

const Garden = () => {
  return (
    <div css={css`
      ${css_EU}
    `}>
      <NavBar />
      <main>
        <Bio />
        <div className="work">
          <h2>Work</h2>
          {cards.map(card => <EUCard card={card} key={card.id} />)}
        </div>
      </main>
    </div>
  )
}

export default Garden



// const css_V = `
// display: grid;
// grid-template-columns: 10% 90%;
// nav {
//   width: fit-content;
//   height: fit-content;
//   justify-self: center;
//   display: flex;
//   flex-direction: column;
//   background: white;
//   justify-content: space-around;
//   .sort {
//     border-bottom: 1px dotted black;
//   }
//   .pageLink {
//     border-bottom: 1px solid black;
//   }
//   a {
//     font-family: serif;
//     font-size: var(--s);
//   }
// }
// main {
//   height: 100vh;
//   overflow-y: scroll;
//     -ms-overflow-style: none;  /* Internet Explorer 10+ */
//     scrollbar-width: none;  /* Firefox */
//   ::-webkit-scrollbar { 
//     display: none;  /* Safari and Chrome */
//   }
// }
// section {
//   display: grid;
//   grid-template-areas: "container";
//   flex-direction: column;
//   justify-content: flex-start;
//   margin-bottom: var(--xxl);
//   h2 {
//     font-family: sans-serif;
//     font-weight: normal;
//     font-size: var(--xxs);
//     text-transform: uppercase;
//     margin-bottom: var(--xxs);
//     grid-area: container;
//     z-index: 2;
//     align-self: end;
//     background: white;
//     width: fit-content;
//     padding: var(--xxs);

//   }
//   .flexContainer {
//     display: flex;
//     width: 100%;
//     grid-area:container;
//     justify-content: flex-start;
//     z-index: 1;
//   img {
//       margin-top: 0;
//       width: 1fr;
//       object-fit: cover;
//       // align-self:flex-start;   
//     }
//     p {
//       display: none;
//     }
//   }
  
// }
// `



