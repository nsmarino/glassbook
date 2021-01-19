import * as React from "react"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import BlogCards from "../components/BlogCards"

import { BlogPostData } from '../types'
import { TagBrowser } from "../components/TagBrowser"

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { MainWithFixedAside, MainWithAsideOnTop, Sidebar } from '../components/styles/scratch'
import { over800, under800 } from '../components/styles/mediaQueries'


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
    <div css={css`
      ${over800} {
        ${MainWithFixedAside}
      }
      ${under800} {
        ${MainWithAsideOnTop}
      }
    `}>
      <aside css={css`
          ${Sidebar}
      `}>
        <TagBrowser
          className='sidebarTags'
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag} 
          projectNames={projectNames} 
          tags={tags} 
        /> 
      </aside>

      <main>
        <BlogCards blogPosts={blogPosts} currentTag={selectedTag} />
      </main>
    </div>
  </Layout>
  )
}

export default DevlogsPage