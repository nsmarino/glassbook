import * as React from "react"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPostCard from "../components/cards/BlogPostCard"
import TagBrowser from '../components/TagBrowser'

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

  return (
    <Layout>
      <SEO title="devlogs" />

      <TagBrowser
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag} 
        projectNames={projectNames} 
        tags={tags} 
      />

      {blogPostEdges.map((edge: any) => 
        <BlogPostCard 
          blogPost={edge.node}
          currentTag={selectedTag} 
          key={edge.node.frontmatter.slug}
        /> 
      )}

    </Layout>
  )
}

export default DevlogsPage