import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { BlogPostData } from '../types'
import BlogPostCard from "./BlogPostCard"

interface CardsCompProps {
  blogPosts: BlogPostData[]
  currentTag: string
}

const BlogCards: React.FC<CardsCompProps> = ( { blogPosts, currentTag }) => {
  return (
  <>
    {blogPosts.map(blogPost => 
      <BlogPostCard 
        blogPost={blogPost} 
        currentTag={currentTag} 
        key={blogPost.frontmatter.title} 
      />
    )}
  </>
  )
}

export default BlogCards