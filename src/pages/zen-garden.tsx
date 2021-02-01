import React from "react"

import Layout from "../components/Layout"

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import { over800, under800 } from '../components/styles/mediaQueries'
import { ulForLinks } from "../components/styles/scratch"


// CONTAINERS
const container1a = `
  background: white;
  scroll-snap-align: start;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  header {
    position: absolute;
    left: 10rem;
  }
  aside {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`
const container1b = `
  background: white;
  scroll-snap-align: start;
  height: 100vh;
  position: relative;
  top: 0;
  display: grid;
  grid-template-columns: repeat(4,25%);
  grid-auto-rows: min-content;
  header {
    background: lightgrey;
    font-family: var(--bodyFont);
    font-size: 2.441rem;
    opacity: 0.8;
    height: 100%;
    p {
      margin: 1rem;
    }

  }
  aside {
    font-family: var(--bodyFont);
    font-size: 1.563rem;
    opacity: 0.8;
    margin: 1rem;
  }
  .card {
    grid-column: 2 / 4;
  }
`
const container1c = `
  background: white;
  scroll-snap-align: start;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 0;
  header {
    width: 600px;
    padding: 1rem;
    p {
      display: inline;
      padding-right: 1rem;
    }
  }
  aside {
    width: 600px;
    padding: 1rem;
    text-align: right;
  }
`
const container2a = `
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/merriweather/v22/u-440qyriQwlOrhSvowK_l5-fCZM.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
  background:  hsl(60,0%,94%);
  scroll-snap-align: start;
  height: 100vh;
  overflow-y: scroll;
  position: relative;
  top: 0;
  display: grid;
  grid-template-columns: repeat(8,12.5%);

  header {
    font-family: 'Merriweather';
    font-size: 1.779rem;
    grid-column: 2/3;
  }



  main {
    grid-column: 4 /7;
    margin-top: 12.5%;
  }


`
const container2b = `
  background:  hsl(60,0%,94%);
  scroll-snap-align: start;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  * {
    margin-left: auto;
    margin-right: auto;
    }
  header {
    display: flex;
    width: 800px;
  }
  aside{
    width: 600px;
    text-align: right;
    margin-bottom: 5rem;
  }
`

// BLOG CARDS:
const ScampA = `
--testColor: hsl(260,90%,40%);
--testColorLight: hsl(260,20%,95%);
--testColorDark: hsl(260,90%,30%);
display: grid;
padding: 1rem;
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
grid-template-rows: min-content;
grid-template-areas: 
  "date tags"
  "headline headline"
  "body body";
// :hover {
//   background: var(--testColorLight);
//   cursor: pointer;
// }
h2 {
  grid-area: headline;
  font-family: var(--bodyFont);
  font-size: 3.052rem;
  font-weight: normal;
  margin:0;
  margin-bottom: 1rem;
  margin-top: 2rem;
}
.date {
  grid-area: date;
  font-size: 1rem;
  font-family: var(--headerFont);
  color: var(--testColor);
  opacity: 1;
  margin: 0;
}
.body {
  grid-area: body;
  font-size: 1.25rem;
  padding-right: 1rem;
  font-family: serif;
  margin: 0;
  opacity: 1;
  line-height: 1.7rem;
  font-family: var(--headerFont);
  }
ul { 
  grid-area: tags;
  ${ulForLinks}
  font-family: var(--headerFont);
  font-size: 1rem;
  color: var(--testColor);
  opacity: 1;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  li {
    padding: 0;
    margin-left: 1rem;
    padding-bottom: 1px;
    border-bottom: 1px solid var(--testColor);
  }

}
` 
const ScampB = `
--light: hsl(60,0%,90%);
--dark: hsl(60,0%,0%);

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
  display: grid;
  max-width: 600px;
  background:hsl(60,0%,98%);;
  border: 2px solid black;
  position: relative;
  margin-bottom: 4rem;
  top: 0;
  grid-template-areas: 
    "headline"
    "body"
    "date"
    "tags";
  h2 {
    grid-area: headline;
    color: black;
    background: white;
    font-family: "Merriweather";
    font-weight: normal;
    font-size:1.779rem;
    margin:0;
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 1rem;
    border: 2px solid var(--dark);
    transform: translateY(-1rem);
  }

  .date {
    grid-area: date;
    font-size: 80%;
    display: none;
  }
  .body {
    grid-area: body;
    font-size: 1.1rem;
    color: black;
    font-family: "Roboto";
    margin: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    opacity: 0.95;
    line-height: 2;

  }
  ul {
    color: hsl(60,0%,40%);
    grid-area: tags;
    font-size: 0.679rem;
    font-family: var(--headerFont);
    ${ulForLinks}
    justify-content: flex-end;
    position: absolute;
    bottom: -1rem;
    right: 0;

    li {
      padding: 0.5rem;
      margin: 0.5rem;
      border: 2px solid hsl(60,0%,40%);
      background: white;
    }
  }
`

const Container:React.FC<{scamp:string, container: string}> = ({ scamp, container }) => {
  return (<div css={css`${container}`}>
<header>
  <p className="current">Blog</p>
  <p>Work Sample</p>
  <p>About Nick</p>
</header>
<main>
<Card scamp={scamp} />
    <Card scamp={scamp} />
</main>
  </div>
  )
}

const Card:React.FC<{scamp:string}> = ({ scamp }) => {
  return (
  <div className="card" css={css`${scamp}`}>
    <h2>Creating a Design System for This Website</h2>
    <p className="date">27 January 2021</p>
    <section className="body">
    <p>I am using the redesign of this site as an opportunity to think more deliberately about interface design. This blog post serves as a development log to record for future reference...</p>
    </section>
    <ul>
      <li>javascript</li>
      <li>graphics</li>
      <li>web dev</li>
    </ul>
  </div>
  )
}

const ZenGarden = () => {
  return (
    <div css={css`
      scroll-snap-type: y mandatory;
      scroll-behavior: smooth;

      max-height: 100vh;
      overflow-y: scroll;
      ::-webkit-scrollbar {
        display: none;
    }

    `}>
      {/* <Container container={container1a} scamp={ScampA}/> */}
      <Container container={container1b} scamp={ScampA}/>
      {/* <Container container={container1c} scamp={ScampA}/> */}

      <Container container={container2a} scamp={ScampB}/>
      {/* <Container container={container2b} scamp={ScampB}/> */}
    </div>
  )
}

export default ZenGarden

// const Scamp1 = `
// @font-face {
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 400;
//   src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
//   unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
// }
//   display: grid;
//   width: 500px;
//   height: 500px;
//   border: 5px solid black;
//   padding: 0.25rem;
//   background: white;
//   grid-template-areas: 
//     "date"
//     "headline"
//     "body"
//     "tags";
//   :hover {
//     background: lightgrey;
//   }
//   h2 {
//     grid-area: headline;
//     font-family: sans-serif;
//     font-size: 333%;
//     margin:0;
//     text-transform: uppercase;
//     font-weight: 500;
//     border-bottom: 2.5px solid black;
//   }
//   .date {
//     grid-area: date;
//     font-size: 60%;
//     margin: 0;
//     text-align: right;
//     text-transform: uppercase;
//   }
//   .body {
//     grid-area: body;
//     font-size: 85%;
//     margin: 0;
//     margin-top:1rem;
//     padding-left:1px;
//     position: relative;
//     top:0;
//   }
//   ul {
//     grid-area: tags;
//     ${ulForLinks}
//     opacity: 0.6;
//     transform: translateY(45px);
//     li {
//       font-family: monospace;
//     }
//   }
//   `

//   const Scamp2 = `
// display: grid;
// max-width: 600px;
// grid-template-areas: 
//   "date tags"
//   "headline headline"
//   "body body";
// h2 {
//   grid-area: headline;
//   font-family: sans-serif;
//   font-size: 333%;
//   margin:0;
//   margin-bottom: 1rem;
//   font-weight: 100;

// }
// .date {
//   grid-area: date;
//   font-size: 75%;
//   opacity: 0.5;
//   font-family: monospace;

// }
// .body {
//   grid-area: body;
//   font-size: 111%;
//   padding-right: 1rem;
//   font-family: serif;
//   margin: 0;
//   opacity: 0.9;
//   // background: hsl(120, 0%, 95%);

// }
// ul {
  
//   grid-area: tags;
//   ${ulForLinks}
//   font-family: monospace;
//   align-items: center;
//   justify-content: flex-end;
//   li {
//     margin: 0;
//     font-size: 75%;
//   }
//   opacity: 0.5;
// }
// `

// const Scamp3 = `
//   display: grid;
//   max-width: 800px;
//   background:black;
//   grid-template-areas: 
//     "headline"
//     "body"
//     "date"
//     "tags";
//   h2 {
//     grid-area: headline;
//     color: black;
//     background: white;
//     font-family: var(--headerFont);
//     font-size: 333%;
//     margin:0;
//     margin-left: 1rem;
//     margin-right: 1rem;
//     padding: 1rem;
//     border: 1px solid black;
//     transform: translateY(-10px);
//   }
//   .date {
//     grid-area: date;
//     font-size: 80%;
//     display: none;
//   }
//   .body {
//     grid-area: body;
//     font-size: 133%;
//     color: white;
//     margin: 0;
//     padding-left: 3rem;
//     padding-right: 3rem;
//     opacity: 0.95;
//     // background: hsl(120, 0%, 95%);

//   }
//   ul {
//     color: white;
//     grid-area: tags;
//     font-size: 90%;
//     font-family: monospace;
//     ${ulForLinks}
//     li {
//       padding: 1rem;
//     }
//     li:first-of-type {
//       padding-left: 3rem;
//     }
//     opacity: 0.9;
//   }
// `

// const Scamp3b = `
//   display: grid;
//   max-width: 600px;
//   background:white;
//   border: 2px solid black;

//   grid-template-areas: 
//     "headline"
//     "body"
//     "date"
//     "tags";
//   h2 {
//     grid-area: headline;
//     color: white;
//     background: black;
//     font-family: var(--headerFont);
//     font-size: 133%;
//     width: fit-content;
//     margin:0;
//     margin-left: 1rem;
//     margin-right: 1rem;
//     padding: 1rem;
//     transform: translateY(-1rem);
//   }
//   .date {
//     grid-area: date;
//     font-size: 80%;
//     display: none;
//   }
//   .body {
//     grid-area: body;
//     font-size: 133%;
//     color: black;
//     font-family: var(--headerFont);
//     margin: 0;
//     padding-left: 2rem;
//     padding-right: 2rem;
//     // background: hsl(120, 0%, 95%);

//   }
//   ul {
//     color: black;
//     grid-area: tags;
//     font-size: 90%;
//     font-family: monospace;
//     ${ulForLinks}
//     justify-content: space-around;
//     li {
//       padding: 1rem;
//       text-transform: uppercase;
//     }
//     opacity: 0.95;
//   }
// `



// const Scamp3a = `
//   display: grid;
//   max-width: 600px;
//   background: hsl(200,20%,40%);
//   border: 2px solid hsl(200,20%,20%);


//   grid-template-areas: 
//     "headline"
//     "body"
//     "date"
//     "tags";
//   h2 {
//     grid-area: headline;
//     color: hsl(200,20%,20%);
//     background: white;
//     font-family: var(--headerFont);
//     font-size: 233%;
//     width: fit-content;
//     margin:0;
//     margin-left: 1rem;
//     margin-right: 1rem;
//     padding: 1rem;
//     border: 2px solid hsl(200,20%,20%);
//     transform: translateY(-1rem);
//   }
//   .date {
//     grid-area: date;
//     font-size: 80%;
//     display: none;
//   }
//   .body {
//     grid-area: body;
//     font-size: 150%;
//     line-height: 1.4;
//     color: white;
//     font-family: var(--headerFont);
//     margin: 0;
//     padding-left: 1rem;
//     padding-right: 1rem;
//     opacity: 0.95;
//     // background: hsl(120, 0%, 95%);

//   }
//   ul {
//     color: white;
//     grid-area: tags;
//     font-size: 90%;
//     font-family: monospace;
//     ${ulForLinks}
//     li {
//       padding: 1rem;
//       text-transform: uppercase;
//     }
//     opacity: 0.95;
//   }
// `

// const Scamp3c = `
//   display: grid;
//   max-width: 600px;
//   background: white;
//   border: 2px solid hsl(200,20%,20%);
//   grid-template-areas: 
//     "headline"
//     "body"
//     "date"
//     "tags";
//   h2 {
//     grid-area: headline;
//     background: hsl(200,20%,40%);
//     color: white;
//     // color: hsl(200,20%,20%);
//     // background: white;
//     font-family: var(--headerFont);
//     font-size: 233%;
//     width: fit-content;
//     margin:0;
//     margin-left: 1rem;
//     margin-right: 1rem;
//     padding: 1rem;
//     border: 2px solid hsl(200,20%,20%);
//     transform: translateY(-1rem);
//   }
//   .date {
//     grid-area: date;
//     font-size: 80%;
//     display: none;
//   }
//   .body {
//     grid-area: body;
//     font-size: 150%;
//     line-height: 1.4;
//     color: hsl(200,20%,20%);
//     font-family: var(--headerFont);
//     margin: 0;
//     padding-left: 1rem;
//     padding-right: 1rem;
//     opacity: 0.95;
//     // background: hsl(120, 0%, 95%);

//   }
//   ul {
//     color: hsl(200,20%,20%);
//     grid-area: tags;
//     font-size: 90%;
//     font-family: monospace;
//     ${ulForLinks}
//     li {
//       padding: 1rem;
//       text-transform: uppercase;
//     }
//     opacity: 0.95;
//   }
// `