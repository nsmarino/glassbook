import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { BlogPostData } from '../types'
import BlogPostCard from "./cards/BlogPostCard"
import { containerCSS } from "./styles/container"

interface CardsCompProps {
  blogPosts: BlogPostData[]
  currentTag: string
}

const BlogCards: React.FC<CardsCompProps> = ( { blogPosts, currentTag }) => {
  return (
  <main css={css`
    ${containerCSS}
    height: 100vh; 
    background: grey;
    `}>
    {blogPosts.map(blogPost => 
      <BlogPostCard 
        blogPost={blogPost} 
        currentTag={currentTag} 
        key={blogPost.frontmatter.title} 
      />
    )}
  </main>
  )
}

export default BlogCards