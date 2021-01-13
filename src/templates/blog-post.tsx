import React from "react"
import { graphql } from "gatsby"
import { BlogPost } from '../types'

import Layout from '../components/layout'
import BlogContainer from '../components/BlogContainer'

const Template: React.FC<{data: {markdownRemark: BlogPost}}> = (
  { data: {
    markdownRemark: {
      frontmatter,
      html
    }
    } 
  }) => {
    return (
    <Layout title={frontmatter.title}>
      <BlogContainer frontmatter={frontmatter} html={html} />
    </Layout>
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