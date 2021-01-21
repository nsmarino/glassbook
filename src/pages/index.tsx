import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"


import { ProjectData, ProjectJSON, BlogPostData } from '../types'

import Layout from "../components/Layout"
import ProjectCards from '../components/ProjectCards'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { LayoutChild } from '../components/styles/scratch'
import { under800 } from "../components/styles/mediaQueries"

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
    <main css={css`
      ${LayoutChild}
      display: flex;
      flex-direction: column;
      align-items: left;
      img {
        padding-bottom: 1rem;
        padding-top: 1rem;
        width: 75%;
      }
      ${under800} {
        img {
          width: 100%;
        }
      }
    `}>
        <ProjectCards projects={projectsWithBlogs} />
    </main>
  </Layout>
  )
}

export default IndexPage