import { over800, under800 } from './mediaQueries'

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

export const Headline = `
margin-top: 0.5rem;
margin-bottom: 0.5rem;
font-size: 300%;
font-weight: 400;
font-family: var(--headerFont);
`
export const CardHeadline = `
margin-top: 0.5rem;
margin-bottom: 0.5rem;
font-weight: normal;
font-size: 200%;
font-family: var(--headerFont);
`

export const Label = `
  opacity: 80%;
  margin: 0;
  font-variant: small-caps;
  text-transform: lowercase;
  font-size: 90%;
`

export const Subtitle = `
  opacity: 80%;
  margin: 0;
  font-style: italic;
  font-size: 80%;
`

export const BodyParagraph = `
  line-height: 1.7;

  p {
    margin-bottom: 2rem;
    font-size: 133%;
    font-family: var(--bodyFont);
    }
`


export const SmallLink = `
  color: inherit;
  text-decoration: underline;
`

export const LinkHover = `
  :hover {
    background: var(--accentColor);
    color: var(--bg);
    text-decoration: none;
  }
`

export const ulForLinks = `        
display: flex;
list-style-type: none;
margin: 0;
padding: 0;
li {
  padding-right: 1rem;
}
a {
  ${SmallLink}
  ${LinkHover}
}
`
export const LayoutChild = `
  padding: 0.5rem;
  ${over800} {
    width: 100%;
    max-width: 50rem;
  }
  ${under800} {
    width: 100%;
    max-width: 100%;
  }
`
export const Horizontal = `
  width: 100%;
  border: none;
  border-top: 2px solid var(--fontColor);
  opacity: 0.2;
`
// Visual composition is different from business logic composition
// Use a media query HOOK where appropriate for logic
// and CSS media queries for strictly visual aspects