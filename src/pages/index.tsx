import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import { ProjectData, ProjectJSON, BlogPostData } from '../types'

import Layout from "../components/layout"
import ProjectCards from '../components/ProjectCards'
import { AboutAside } from '../components/About'

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
      display: flex;
      justify-content: center;

      height: 100vh;
      overflow: hidden;
      position: relative;
      main, aside {
        overflow: auto;
        height: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      main::-webkit-scrollbar,
      aside::-webkit-scrollbar {
        display: none;
      }
  

      main {
        flex-basis: 66.66%;
      }
      aside {
        flex-basis: 33.33%;
      }
      @media only screen and (max-width: 800px) {
        aside {
          display: none;
        }
        main {
          flex-basis: 100%;
        }
      }      
    `}>
      <AboutAside />
      <ProjectCards projects={projectsWithBlogs} />
    </div>
  </Layout>
  )
}

export default IndexPage