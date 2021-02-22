import React from "react"

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { under768 } from '../components/styles/mediaQueries'

const CSS_blog = `
  padding-left: 25%;
  padding-right: 25%;
  ${under768} {
    padding-left: 1%;
    padding-right: 1%;
  }      
  .blogTitle {
    font-family: var(--sans);
    font-weight: normal;
    font-size: var(--xl);
    padding: var(--xxs);
    background: var(--fg);
    letter-spacing: 0.8px;
    margin-top: 0;
  }

  .blog-post-content {
    font-family: var(--mono);
    font-size: var(--s);
    line-height: 1.5;
    opacity: 1;
    .content-image {
      width: 50%;
      margin-left: 25%;
      img {
        max-width: 100%;
      }
    }
    h3 {
      font-family: var(--mono);
      font-weight: normal;
      font-size: var(--m);
      background: var(--fontColor);
      color: var(--fg);
      text-align: center;
      margin-top: var(--xxl);
      width: fit-content;
      margin-bottom: var(--xxs);
      padding-left: var(--xxs);
      padding-right: var(--xxs);
    }
    p {
      background: var(--fg);
      padding: var(--xxs);
      text-align: justify;
      margin-top: var(--xxs);
      margin-bottom: var(--xxs);
    }
    ul {
      background: var(--fg);
      padding: var(--xxs);
      width: 80%;
      margin-left: 10%;
      li {
        margin-left: var(--xxs);
      } 
    }
    a {
      color: var(--fontColor);
      font-weight: bold;
    }
    pre {
      color: white;
      background: #222;
    }
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
        <h2 className="blogTitle">{frontmatter.title}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
  )
}

export default BlogContainer