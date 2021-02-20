import React from "react"

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { under768 } from '../components/styles/mediaQueries'

const CSS_blog = `
  background: var(--bg);
  padding-top: calc(var(--xxl) * 3 + 1rem);
  padding-left: 12.5%;
  padding-right: 37.5%;
  ${under768} {
    padding-left: 1%;
    padding-right: 1%;
  }      
  .blogTitle {
    font-family: var(--sans);
    font-weight: normal;
    font-size: var(--l);
    letter-spacing: 0.8px;
    margin-top: 0;

  }
  .blog-post-content {
    font-family: var(--mono);
    font-size: var(--s);
    line-height: 1.5;
    opacity: 1;
    p {
      
      text-align: justify;
    }
    a {
      color: var(--fontColor);
      font-weight: bold;
    }
  }

  .blog-post-content h2 {
    font-family: var(--mono);
    font-weight: normal;
    letter-spacing: 0.8px;
    font-size: var(--m);
    text-transform: uppercase;
    opacity: 1;
    color: var(--accent);
    margin-top: var(--xl);
    margin-bottom: var(--xs);
  }

  .blog-post-content h3 {
    font-family: var(--mono);
    font-weight: normal;
    font-size: var(--s);
    opacity: 0.5;
    color: var(--accent);
    text-transform: uppercase;
    margin-top: var(--xl);
    margin-bottom: var(--xxs);
  }
  pre {
    color: white;
    background: #222;
  }
`

interface iBlogPost {
  frontmatter: {
    text: string
    slug: number
    title: string
  }
  html: string
}

const BlogContainer: React.FC<iBlogPost> = ({ frontmatter, html}) => {
  return (
      <article css={css`
        ${CSS_blog}
      `}>
        <h2 className="blogTitle"><span>{frontmatter.title}</span></h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
  )
}

export default BlogContainer