import React from "react"
import { BlogPost } from '../types'

/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const BlogContainer: React.FC<BlogPost> = ({ frontmatter, html}) => {
  return (
      <article className="blog-post">
        <h1>{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        { frontmatter.tags.map(tag => 
        <p key={tag}>{tag}</p>)
        }
      </article>
  )
}

export default BlogContainer