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
  <div css={css`${containerCSS}`}>
    {blogPosts.map(blogPost => 
      <BlogPostCard 
        blogPost={blogPost} 
        currentTag={currentTag} 
        key={blogPost.frontmatter.title} 
      />
    )}
  </div>
  )
}

export default BlogCards