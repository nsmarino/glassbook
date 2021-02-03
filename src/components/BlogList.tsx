import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { under768 } from '../components/styles/mediaQueries'

const CSS_blogList = `
  background: var(--bg);
  padding-top: calc(var(--xxl) * 3 + 1rem);

  padding-bottom: 1rem;
  padding-left: 12.5%;
  padding-right: 25%;
  ${under768} {
    padding-left: 1%;
    padding-right: 1%;
  }
`
const CSS_card = `
a {
  text-decoration: none;
  color: inherit;
}
:hover {
  cursor: pointer;
  h2{
    text-decoration: underline;
  }
  .body{
    opacity: 0.6;
  }
}
margin-bottom: var(--xxl);

h2 {
  font-size: var(--s);
  font-family: var(--sans);
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 0.25rem;
}

.body {
  color: black;
  opacity: 0.5;
  font-size: var(--s);
  padding-right: 1rem;
  margin: 0;
  line-height: 1.4rem;
  font-family: var(--mono);
  ::after {
    content: '...';
  }
  }
` 
const Card:React.FC<{blog: any}> = ({ blog }) => {
  return (
  <div className="card" css={css`
    ${CSS_card}
  `}>
    <Link to={blog.node.frontmatter.slug}>
      <h2>{blog.node.frontmatter.title}</h2>
      <p className="body">{blog.node.frontmatter.text}</p>
    </Link>
  </div>
  )
}

const BlogList: React.FC = () => { 
  const {allMarkdownRemark: { edges: blogs }} = useStaticQuery(graphql`
    query blogs {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blogs)/"  }}) {
        edges {
          node {
            html
            id
            frontmatter {
              slug
              title
              text
            } 
          }
        }
      }
    }
  `)
  return (
  <section id="blog" css={css`${CSS_blogList}`}>
    {blogs.map((blog:any) => <Card blog={blog} />)}
  </section>
  )
}

export default BlogList

// import { BlogPostData } from '../types'
// import BlogPostCard from "./BlogPostCard"

// interface CardsCompProps {
//   blogPosts: BlogPostData[]
//   currentTag: string
// }
