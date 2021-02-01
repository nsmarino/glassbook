import * as React from "react"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import BlogCards from "../components/BlogCards"

import { BlogPostData } from '../types'
import TagList from "../components/TagList"

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { LayoutChild } from '../components/styles/scratch'
import { over800, under800 } from '../components/styles/mediaQueries'

const BlogPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState('')

  const {
    allMarkdownRemark: {
      edges: blogPostEdges
    }
  } =  useStaticQuery(graphql`
  query BlogQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            project
            slug
            title
            tags
            date
          }
        }
      }
    }
  }`)

  const mergeDedupe = (input: string[]): string[] => {
    const mergeTarget: string[] = []
    return [...new Set(mergeTarget.concat(...input))]
  }
  const projectNames = mergeDedupe(blogPostEdges.map((edge:any) => edge.node.frontmatter.project))
  const tags = mergeDedupe(blogPostEdges.map((edge: any) => edge.node.frontmatter.tags))
  
  const extractNodeFromEdge = (edge: any) => edge.node
  const blogPosts: BlogPostData[] = blogPostEdges.map(extractNodeFromEdge)
  
  return (
  <Layout title="blog">
  <aside css={css`${LayoutChild}`}>
    <TagList
      selectedTag={selectedTag}
      setSelectedTag={setSelectedTag} 
      projectNames={projectNames} 
      tags={tags} 
     />
  </aside>

  <main css={css`
    ${LayoutChild}
  `}>
    <BlogCards blogPosts={blogPosts} currentTag={selectedTag} />
  </main>
  </Layout>
  )
}

export default BlogPage