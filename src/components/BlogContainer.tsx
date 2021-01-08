import React from "react"
import { BlogPost } from '../types'

const BlogContainer: React.FC<BlogPost> = ({ frontmatter, html}) => {
  return (
    <>
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      { frontmatter.tags.map(tag => 
        <p key={tag}>{tag}</p>)
      }
    </>
  )
}

export default BlogContainer