---
slug: /interactive-svg/blog
title: Interactive Multi-Level SVG with React and Greensock
text: Zoomable adventure game
---
I used React custom hooks and the Greensock Animation Platform to prototype a point-and-click game using SVGs. The idea for the game is as follows: you are presented with a single SVG image. You click on different parts of the image to zoom in, making use of the fact that vector graphics are infinitely scaleable. When you have zoomed in, you interact with parts of the image to solve puzzles and unlock new locations to zoom to.

I played around with a similar idea when I was very young, creating details scenes at microscopic sizes in the vector gaphics program CorelDRAW, and I decided to revisit the idea after playing Dark Souls. Levels in Dark Souls often include a lookout point where you can gaze across a desolate landscape and see various castles and cliffs that you know you will soon explore. I thought it would be an interesting challenge to make the entire game that opening vista, and use SVG zooms to create a "soulslike point and click."

After a little brainstorming, I came up with a basic pitch for a game built around these design challenges. The player is attempting to climb a mountain to heaven and thus achieve immortality. To get to heaven, they will need to traverse a tunnel through the center of the mountain, solving puzzles along the way. This idea, of a tunnel spiraling upward through a mountain, seemed to fit with my idea of traversing through zooms.

Once I had this basic idea, I built a prototype using React and Greensock. Following the doctrine of separation of concerns, I had decided to use React for state management and conditional rendering, and Greensock for animating the interactive parts.

React is not a good fit for most kinds of video games, but it makes a certain kind of sense for point-and-click style games. The game is a single image. Parts of the image behave differently depending on what the user has done. In our prototype, the user is able to zoom in on a small scene and pull a lever to make some gears turn. We can easily manage this sort of behavior using React Hooks.

Greensock will be used for animations. It has a very straightforward API for describing animations, and has under-the-hood optimatizations that make SVG animations behave well in all browsers. Unfortunately, Greensock and React are designed in very different ways.

Let's set up the basic prototype.

### Starting the project
I created a React app and installed Greensock.

    npx create-react-app svg-game
    cd svg-game
    npm i gsap
    npm start

We know that we want to be able to do two things in this game: we want to zoom in when we click on a chapter title, and we want to interact with parts of the zoomed-in scene by clicking. Let's tackle these things one at a time.

I have designed a simple image in Illustrator. We have the grandiose title of the game and a line that, if you squint, somewhat resembles a mountain. Beneath the mountain, a small scene hides in the 'O' of CHAPTER ONE. There's a lever and some sort of geared machine. I will consider the prototype 'done' when you can zoom in to this scene by clicking on CHAPTER ONE and make the gears start or stop turning by clicking the lever.

To make the SVG easy to deal with in React, it is important to separate the different parts of the drawing into named layers.

After preparing the svg for export, I just hit "View Code" to see the raw SVG markup in a .txt file. It's easier to just copy it from there and paste it into my React app.

I created three components: an SVG Container, where we will manage the zoom level, a Title component for the static background, and a Chapter One component where we will have our interactive lever and gears.

Right now our app looks like this:

    import SVGContainer from './components/SVGContainer'
    import ChapterOne from './components/ChapterOne'
    import Title from './components/Title'
    import './App.css'

    const App = () => {

      return (
      <main>
        <SVGContainer>
          <Title />  
          <ChapterOne />  
        </SVGContainer>
      </main>
      )
    }

    export default App

### Zoom in on click
We can control the zoom level of the SVG by changing the size of its viewBox attribute. We need to do the following:

- Keep track of the current zoom level so that all components are aware of it
- Change zoom level by clicking on different chapter titles
- Smoothly transitio changes in the zoom level

Thats quite a lot of tasks, and will require a marriage between React and Greensock, so I decided to fold the code for this into a custom 'useZoom' hook which I will call at the top level of the app. It will give us a zoom level that can be passed as as a prop to components, and an enter and leave function that we can assign to the parts of the image that we want to use for navigation.

useZoom hook:

    import { useState } from 'react'
    import {fullView} from '../constants'

    const useZoom = () => {
      const [zoom, setZoom] = useState(fullView)

      const enter = (chapter, transition) => {
        setZoom(chapter)
        transition.restart()
      }

      const leave = (transition) => {
        setZoom(fullView)
        transition.reverse()
      }

      return [enter, leave, zoom]
    }

    export default useZoom

Inside the hook, we keep track of the zoom level using the useState React hook. The enter function will set the zoom to the viewBox size we give it and trigger a greensock transition. The trasition we will be using will be a simple fade-in. The leave will set the zoom back to the full view and reverse the transition.

At the app level, we can feed these props to the components that need them:

    import useZoom from './hooks/useZoom'
    import SVGContainer from './components/SVGContainer'
    import ChapterOne from './components/ChapterOne'
    import Title from './components/Title'
    import './App.css'

    const App = () => {
      const [enter, leave, zoom] = useZoom()

      return (
      <main>
        <SVGContainer zoom={zoom}>
          <Title />  
          <ChapterOne enter={enter} leave={leave} />  
        </SVGContainer>
      </main>
      )
    }

    export default App

The SVG Container will receive the value of the zoom variable as a prop. We use React's useEffect hook to trigger a greensock animation that smoothly changes the size of the viewBox attribute when the zoom variable changes.

    import { useRef, useEffect } from 'react'
    import gsap from 'gsap'
    import { fullView, zoomSpeed } from '../constants'

    const SVGContainer = ({children, zoom}) => {
      const containerRef=useRef()
      
      useEffect(() => {
        gsap.to(containerRef.current, {
          attr:{viewBox:zoom}, 
          duration: zoomSpeed,
        })
      }, [zoom])

      return (
      <svg 
        ref={containerRef}
        viewBox={fullView}
        preserveAspectRatio="xMidYMid meet"
        style={{background: 'white', width: '75vmin'}}
      >
        {children}
      </svg>
      )
    }

    export default SVGContainer

Greensock works by enacting animations on actual DOM nodes, whereas React works by maintaining a 'virtual DOM' and only changing the parts of the real DOM that are affected by state changes. To allow them to work together, we target the actual DOM node created by the JSX and store its value in a useRef hook.

Now that we have a way to zoom in and out, we can make it so that clicking on 'Chapter One' takes us to our lever and gears.

Here is our Chapter One right now. I have omitted the bulk of the svg markup for readability.

    import useTimelines from '../hooks/useTimelines'
    import { chapterOneView} from '../constants'
    import { showChapter } from '../animations'

    const chapterAnimations = [showChapter]


    const ChapterOne = ({enter, leave}) => {
      const [chapterRef, { showChapter }] = useTimelines(chapterAnimations)

      return (<>
        <text onClick={() => enter(chapterOneView, showChapter)}>CHAPTER ONE</text>

      <g id="chapterOne" class="chapter" ref={chapterRef}>
      // ...Rest of SVG markup
      
    <text onClick={() => leave(showChapter)}>-back</text>
    </g>
    </>
      )
    }

    export default ChapterOne

We have attached the enter and leave functions from the useZoom hook to the different pieces of text we want to use for navigation. The transition that will be triggered affects the scene inside the O of CHAPTER ONE. It will fade into view when the chapter title is clicked, and fade out of existence when 'back' is clicked inside the scene. We've stored it in a separate file called animations.js.

    import gsap from 'gsap'

    export const showChapter = (target) => 
      gsap.timeline({paused:true})
        .set(target, {display: 'block'})
        .to(target, {opacity: 1, duration: 2})

Because Greensock and React are designed differently, we will handle the code for reconciling them inside a custom useTimelines hook.

    import { useRef, useState, useEffect } from 'react'

    const useTimelines = (animations) => {
      const ref = useRef()

      const [timelines, setTimelines] = useState([])

      useEffect(() => {
        if (ref.current) {
          const updatedTimelines = animations.map(animation=> (
            {[animation.name]: animation(ref.current)}
            )
          )
          setTimelines(Object.assign(...updatedTimelines))
        }
      }, [ref, animations]) 

      return [ref, timelines]
    }

    export default useTimelines

We define an array of animations outside of the component so that it does not re-render on every prop-change, then pass that array to the hook. It gives us a ref we can attach to the node we want to animate, and a handler where we can call different animations as functions. With this custom hook managing the differences in rendering philosophy between react and greensock, the tricky stuff has been safely abstracted away and we are able to easily zoom in and out of the scene. 

Now that we can zoom in and out, we just need to get the gears moving when the lever is clicked. We will define animations for the lever and the gears and export them from animations.js:

    export const pullLever = (target) => 
      gsap.timeline({paused: true})
        .to(target.querySelector('#shaft'), {rotation: 45, transformOrigin: '50% 100%', duration: 1})
        .to(target.querySelector('#shaft'), {rotation: -36, transformOrigin: '50% 100%', duration: 0.5})

    export const turnGear = (target) => 
      gsap.timeline({paused: true, repeat: -1})
        .to(target, {rotation: 360, transformOrigin: '50% 50%', duration: 2, ease:'none'})

We can then update the ChapterOne component so that clicking the lever triggers the pullLever animation, which will in turn set the gears a-turning.

    import useTimelines from '../hooks/useTimelines'
    import { useState } from 'react'
    import { chapterOneView} from '../constants'
    import { pullLever, turnGear, showChapter } from '../animations'

    const chapterAnimations = [showChapter]
    const gearAnimations = [turnGear]
    const leverAnimations = [pullLever]

    const ChapterOne = ({enter, leave}) => {
      const [gearsTurning, setGearsTurning] = useState(false)

      const [chapterRef, { showChapter }] = useTimelines(chapterAnimations)
      const [bigGearRef, bigGearTimelines] = useTimelines(gearAnimations)
      const [smallGearRef, smallGearTimelines] = useTimelines(gearAnimations)
      const [leverRef, { pullLever }] = useTimelines(leverAnimations)

      const handleLeverClick = () => {
          pullLever.restart()
          pullLever.eventCallback("onComplete", () => {
            if(gearsTurning) {
              bigGearTimelines.turnGear.pause()
              smallGearTimelines.turnGear.pause()
            }
            if (!gearsTurning) {
              bigGearTimelines.turnGear.play()
              smallGearTimelines.turnGear.play()
            }
            setGearsTurning(!gearsTurning)
          });
      }

      return (<>
      <text onClick={() => enter(chapterOneView, showChapter)} ...>CHAPTER ONE</text>
      
      <g id="chapterOne" class="chapter" ref={chapterRef}>

        <path id="sky" ... />
        <polygon id="mountain" ... />
        <circle id="sun" ... />
        <polygon id="hill" .../>

        <g id="machine">
          <polygon id="tallPost" ... />
          <polygon id="shortPost" ... />
          <line id="bottomWire" ... />
          <line id="topWire" ... />
          <g id="bigGear" ref={bigGearRef}>...</g>
          <g id="smallGear" ref={smallGearRef}>...</g>
        </g>

    <g id="Lever" 
      class="click" ref={leverRef} 
      onClick={handleLeverClick}>
      ...</g>

    <text onClick={() => leave(showChapter)} ...>-back</text>
    </g>
    </>
      )
    }

    export default ChapterOne

  Next steps for this project: Use aria labels to make the SVG accessible. Work on actual game design and create some puzzles so Im not just chasing my tail doing refactoring without an endgoal in mind. The way the lever triggers the rotation of the gears violates the 'separation of concerns' principle; it would probably be better to have the starts and stops of the gears in an effect hook.

  Link to repo: 
  Link to prototype: 



