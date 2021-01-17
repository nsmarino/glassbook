import * as React from "react"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import Layout from "../components/layout"

import { BlogPostData } from '../types'
import BlogCards from "../components/BlogCards"

// testing out an idea:
import { TagBrowser } from "../components/TagBrowser"

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
    height: 100vh;
      display: flex;
      justify-content: center;
      main {
        flex-basis: 66.66%;
      }

      .sidebarTags {
        flex-basis: 33.33%;
      }

      .dropdownTags {
        display: none;
      }

      @media only screen and (max-width: 800px) {
        flex-direction: column;
        main {
          flex-basis: 66.66%;
        }
        .sidebarTags {
          display: none;
        }
        .dropdownTags {
          display: block;
          flex-basis: 33.33%;
        }
      }      
    `}>

      <TagBrowser // Appears on mobile and small screens.
        className="dropdownTags"
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag} 
        projectNames={projectNames} 
        tags={tags} 
      />  

      <TagBrowser // Appears on large screens.
        className="sidebarTags"
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag} 
        projectNames={projectNames} 
        tags={tags} 
      />      

      <BlogCards blogPosts={blogPosts} currentTag={selectedTag} />
    </div>
  </Layout>
  )
}

export default DevlogsPage