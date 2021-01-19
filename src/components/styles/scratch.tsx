export const MainWithFixedAside = `
  main {
    margin-left: 33.33%;
    min-height: 100vh;
  }
  aside {
    position: fixed;
    top: 0;
    width: 33.33%;
    height: 100vh;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }   
  }
`

export const MainWithNoAside = `
display: flex;
justify-content: center;
main {
  flex: auto;
}
aside {
    display: none;
  }
`

export const MainWithAsideOnTop = `
  display: flex;
  justify-content: center;
  flex-direction: column;
  main {
    flex: auto;
  }
  aside {
  }
`

export const Sidebar = `
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 4rem;
`

export const BodyParagraph = `
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 150%;
`
export const ArticleBlock = `
border: 5px solid blue;
display: flex;
flex-direction: column;
justify-content: center;
h1,h2,h3 {
  margin: 0;
}
p {
  ${BodyParagraph}
}
`

export const ContentCard = `
img {
  width: calc(100% - 1rem);
  margin-bottom: 1rem;
  border-radius: 1rem;
}
@media only screen and (max-width: 800px) {
  flex-direction: column;
  align-items: start;
  display: flex;
  align-items: center;
}
@media only screen and (min-width: 800px) {
  display: grid;
  grid-template-areas:
    '. header'
    'info picture';
  grid-template-columns: 1fr 2fr;
  min-height: 10rem;
  border: 1px solid #222;
  h2 {
    grid-area: header;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  img {
    grid-area: picture;
  }
  .info {
    grid-area: info;
    padding-left: 1rem;
    padding-right: 1rem;
    p {
      margin: 0;
    }
  }  
}  
`

export const ul = `        
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;

  li {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

// Visual composition is different from business logic composition
// Use a media query HOOK where appropriate for logic
// and CSS media queries for strictly visual aspects