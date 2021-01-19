import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"


import { ProjectData, ProjectJSON, BlogPostData } from '../types'

import Layout from "../components/layout"
import ProjectCards from '../components/ProjectCards'
import { AboutAside } from '../components/About'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { MainWithFixedAside, MainWithNoAside } from '../components/styles/scratch'
import { over800, under800 } from '../components/styles/mediaQueries'

const IndexPage: React.FC = () => {

  // Retrieve JSON project info and all blog posts titles from data layer
  const {
    allWorksJson: { 
      edges: projectInfoEdges
    },
    allMarkdownRemark: {
      edges: blogPostEdges
    }
  } = useStaticQuery(graphql`
  query MyQuery {
    allWorksJson {
      edges {
        node {
          name
          year
          url
          description
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            title
            project
            tags
          }
        }
      }
    }
  }`)

  const extractNodeFromEdge = (edge: any) => edge.node
  const projects: ProjectJSON[] = projectInfoEdges.map(extractNodeFromEdge)
  const blogPosts: BlogPostData[] = blogPostEdges.map(extractNodeFromEdge)

  const projectsWithBlogs: ProjectData[] = projects.map(
    (proj): ProjectData => {
    return {
      ...proj,
      blogs: blogPosts.filter((post) => post.frontmatter.project === proj.name)
  }})

  return (
  <Layout title="portfolio">
    <div css={css`
      ${over800} {
        ${MainWithFixedAside}
      }
      ${under800} {
        ${MainWithNoAside}
      }
    `}>
      <AboutAside />
      <main>
        <ProjectCards projects={projectsWithBlogs} />
      </main>
    </div>
  </Layout>
  )
}

export default IndexPage