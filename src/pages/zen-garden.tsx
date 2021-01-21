import React from "react"

import Layout from "../components/Layout"

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import { over800, under800 } from '../components/styles/mediaQueries'

const MainWithFixedAside = `
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
const MainWithNoAside = `
  display: flex;
  justify-content: center;
  main {
    flex: auto;
    border: 4px solid black;
  }
  aside {
    display: none;
  }
`
const Sidebar = `
    background: #444;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 4rem;
`
const BodyParagraph = `
    line-height: 1.7;
    margin-bottom: 2rem;
    font-size: 150%;
`

const ContentCard = `
  background: darkgreen;
  border: 2px solid white;
  margin: 4rem;
  padding: 1rem;
  min-height: 10rem;
`

const RightCard = () => (
  <div css={css`
    ${ContentCard}
  `}>
    <h1>Content card</h1>
    <p>Amet enim esse ex fugiat cillum adipisicing voluptate adipisicing laborum labore aliqua. Aute incididunt veniam aute cillum quis pariatur occaecat occaecat reprehenderit cillum quis cupidatat. Tempor esse laborum veniam esse mollit veniam velit ut reprehenderit aliquip enim consequat.

Reprehenderit sit amet commodo do excepteur eiusmod excepteur dolore tempor nisi culpa nisi velit. Voluptate commodo proident nulla Lorem ea voluptate ipsum pariatur velit. Quis exercitation officia sint cupidatat amet quis do nisi elit voluptate cillum cupidatat.</p>
  </div>
)

const ZenGarden = () => (
  <div css={css`
    ${over800} {
      ${MainWithFixedAside}
    }
    ${under800} {
      ${MainWithNoAside}
    }
  `}>
    <aside css={css`
    ${Sidebar}
    p {
      ${BodyParagraph}
    }
    
    `}>
      <h1>Sidebar Header</h1>
<p>Nostrud qui in quis exercitation laboris nostrud irure commodo exercitation amet. Officia velit ut labore esse mollit enim. Aliquip quis laborum aute in exercitation Lorem ullamco consectetur proident do anim et. Sint pariatur duis fugiat elit incididunt et dolor id reprehenderit sit magna ad id. Aliquip laboris reprehenderit sint incididunt velit est sunt anim adipisicing laborum eu adipisicing commodo cillum.

Quis laboris adipisicing veniam laborum deserunt id minim. Eu velit voluptate eu eu qui occaecat consequat dolor duis excepteur consectetur duis. Proident esse nisi officia magna irure reprehenderit nostrud. Et adipisicing elit amet ex officia irure ea culpa aute exercitation laborum nisi enim proident.</p>    
<p>Nostrud qui in quis exercitation laboris nostrud irure commodo exercitation amet. Officia velit ut labore esse mollit enim. Aliquip quis laborum aute in exercitation Lorem ullamco consectetur proident do anim et. Sint pariatur duis fugiat elit incididunt et dolor id reprehenderit sit magna ad id. Aliquip laboris reprehenderit sint incididunt velit est sunt anim adipisicing laborum eu adipisicing commodo cillum.

Quis laboris adipisicing veniam laborum deserunt id minim. Eu velit voluptate eu eu qui occaecat consequat dolor duis excepteur consectetur duis. Proident esse nisi officia magna irure reprehenderit nostrud. Et adipisicing elit amet ex officia irure ea culpa aute exercitation laborum nisi enim proident.</p>    
<p>Nostrud qui in quis exercitation laboris nostrud irure commodo exercitation amet. Officia velit ut labore esse mollit enim. Aliquip quis laborum aute in exercitation Lorem ullamco consectetur proident do anim et. Sint pariatur duis fugiat elit incididunt et dolor id reprehenderit sit magna ad id. Aliquip laboris reprehenderit sint incididunt velit est sunt anim adipisicing laborum eu adipisicing commodo cillum.

Quis laboris adipisicing veniam laborum deserunt id minim. Eu velit voluptate eu eu qui occaecat consequat dolor duis excepteur consectetur duis. Proident esse nisi officia magna irure reprehenderit nostrud. Et adipisicing elit amet ex officia irure ea culpa aute exercitation laborum nisi enim proident.</p>    
<p>Nostrud qui in quis exercitation laboris nostrud irure commodo exercitation amet. Officia velit ut labore esse mollit enim. Aliquip quis laborum aute in exercitation Lorem ullamco consectetur proident do anim et. Sint pariatur duis fugiat elit incididunt et dolor id reprehenderit sit magna ad id. Aliquip laboris reprehenderit sint incididunt velit est sunt anim adipisicing laborum eu adipisicing commodo cillum.

Quis laboris adipisicing veniam laborum deserunt id minim. Eu velit voluptate eu eu qui occaecat consequat dolor duis excepteur consectetur duis. Proident esse nisi officia magna irure reprehenderit nostrud. Et adipisicing elit amet ex officia irure ea culpa aute exercitation laborum nisi enim proident.</p>    
<p>Nostrud qui in quis exercitation laboris nostrud irure commodo exercitation amet. Officia velit ut labore esse mollit enim. Aliquip quis laborum aute in exercitation Lorem ullamco consectetur proident do anim et. Sint pariatur duis fugiat elit incididunt et dolor id reprehenderit sit magna ad id. Aliquip laboris reprehenderit sint incididunt velit est sunt anim adipisicing laborum eu adipisicing commodo cillum.

Quis laboris adipisicing veniam laborum deserunt id minim. Eu velit voluptate eu eu qui occaecat consequat dolor duis excepteur consectetur duis. Proident esse nisi officia magna irure reprehenderit nostrud. Et adipisicing elit amet ex officia irure ea culpa aute exercitation laborum nisi enim proident.</p>    
<p>Nostrud qui in quis exercitation laboris nostrud irure commodo exercitation amet. Officia velit ut labore esse mollit enim. Aliquip quis laborum aute in exercitation Lorem ullamco consectetur proident do anim et. Sint pariatur duis fugiat elit incididunt et dolor id reprehenderit sit magna ad id. Aliquip laboris reprehenderit sint incididunt velit est sunt anim adipisicing laborum eu adipisicing commodo cillum.

Quis laboris adipisicing veniam laborum deserunt id minim. Eu velit voluptate eu eu qui occaecat consequat dolor duis excepteur consectetur duis. Proident esse nisi officia magna irure reprehenderit nostrud. Et adipisicing elit amet ex officia irure ea culpa aute exercitation laborum nisi enim proident.</p>    
<p>Nostrud qui in quis exercitation laboris nostrud irure commodo exercitation amet. Officia velit ut labore esse mollit enim. Aliquip quis laborum aute in exercitation Lorem ullamco consectetur proident do anim et. Sint pariatur duis fugiat elit incididunt et dolor id reprehenderit sit magna ad id. Aliquip laboris reprehenderit sint incididunt velit est sunt anim adipisicing laborum eu adipisicing commodo cillum.

Quis laboris adipisicing veniam laborum deserunt id minim. Eu velit voluptate eu eu qui occaecat consequat dolor duis excepteur consectetur duis. Proident esse nisi officia magna irure reprehenderit nostrud. Et adipisicing elit amet ex officia irure ea culpa aute exercitation laborum nisi enim proident.</p>    
</aside>

    <main>
      <RightCard />
      <RightCard />
      <RightCard />
      <RightCard />
      <RightCard />
      <RightCard />
      <RightCard />
      <RightCard />
      <RightCard />
      <RightCard />
    </main>
  </div>
)

export default ZenGarden

// height: auto;
// overflow: auto;
// position: fixed; 
