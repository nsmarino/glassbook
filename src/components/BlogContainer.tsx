import React from "react"
import { BlogPost } from '../types'

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { block } from "./styles/block"

const BlogContainer: React.FC<BlogPost> = ({ frontmatter, html}) => {
  return (
    <div css={css`${block}`}>
      <article className="blog-post">
        <h1>{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      { frontmatter.tags.map(tag => 
        <p key={tag}>{tag}</p>)
      }
    </div>
  )
}

export default BlogContainer