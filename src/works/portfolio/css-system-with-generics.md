---
project: portfolio
slug: /portfolio/css-system-with-generics
title: Prototyping Site Design With Emotion JS And Placeholder Elements
tags: ['css', 'ui design', 'system planning', 'emotion']
date: '29 January 2021'
---
<!-- 1 -->
In redesigning this site, I was afforded an opportunity to think more carefully about how to write CSS for a React application. In past projects, I have usually used styled-components to handcraft each element, so as to make them fit the picture I had in my head. This led to a lot of unexpected bugs and unorganized code, and I often had to hunt through different files when I wanted to change or fix something. For this project, I decided instead to try to write a design system that would allow me to prototype different visual ideas easily, then fine tune the appearances of specific elements and components using the principle of composition. I worked with Emotion and Framer Motion to achieve this.

<!-- 2 -->
The first step was creating a generic placeholder object for all top-level elements. I wanted to establish where the negative space on the page would be at various window sizes. The only idea I had for how I wanted the site to look was frosted glass. The eventual feel of each component should have its origin in this basic concept, just as the branches of a tree have a common origin in the tree's trunk.  

<!-- 3 -->
1. create block element
2. manage whitespace and media queries
3. page transitions
4. interior layout