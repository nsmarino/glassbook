import * as React from "react"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import TagBrowser from '../components/TagBrowser'

import { BlogPostData } from '../types'
import BlogCards from "../components/BlogCards"

const DevlogsPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState('')

  const {
    allMarkdownRemark: {
      edges: blogPostEdges
    }
  } =  useStaticQuery(graphql`
  query devLogsQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            project
            slug
            title
            tags
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
    <Layout title="devlogs">
      <TagBrowser
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag} 
        projectNames={projectNames} 
        tags={tags} 
      />

      <BlogCards blogPosts={blogPosts} currentTag={selectedTag} />

    </Layout>
  )
}

export default DevlogsPage