import React from "react"
import { graphql } from "gatsby"
import { BlogPost } from '../types'

import MainLayout from '../components/layout'

const Template: React.FC<{data: {markdownRemark: BlogPost}}> = (
  { data: {
    markdownRemark: {
      frontmatter,
      html
    }
    } 
  }) => {
console.log(frontmatter)
  return (
    <MainLayout>
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      { frontmatter.tags.map(tag => <p key={tag}>{tag}</p>)}
    </MainLayout>
  )
}

export default Template

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        tags
      }
    }
  }
`