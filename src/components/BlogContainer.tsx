import React from "react"
import { BlogPost } from '../types'

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { BodyParagraph, CardHeadline, Label, LayoutChild, Subtitle } from "./styles/scratch"

const BlogContainer: React.FC<BlogPost> = ({ frontmatter, html}) => {
  return (
      <article css={css`
        ${LayoutChild}
        h2 {
          ${CardHeadline}
          font-size: 333%;
        }
        .date {
          ${Subtitle}
          margin-bottom: 4rem;
        }
        .blog-post-content {
          ${BodyParagraph}
        }
        .tag {
          ${Label}
        }
      `}>
        <h2>{frontmatter.title}</h2>
        <p className="date">{frontmatter.date}</p>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        { frontmatter.tags.map(tag => 
        <p key={tag} className="tag">{tag}</p>)
        }
      </article>
  )
}

export default BlogContainer