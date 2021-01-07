import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { BlogPost, ProjectData } from '../types'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/ProjectCard"

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
          html
        }
      }
    }
  }`)

  const extractNodeFromEdge = (edge: {node: string}) => edge.node

  const projects = projectInfoEdges.map(extractNodeFromEdge)
  const blogPosts = blogPostEdges.map(extractNodeFromEdge)

  const projectsWithBlogs: ProjectData[] = projects.map(
    (proj: {name: string}) => {
    return {
      ...proj,
      blogs: blogPosts.filter((post: BlogPost) => post.frontmatter.project === proj.name)
  }})

  console.log(projectsWithBlogs)
  return (
    <Layout>
      <SEO title="portfolio" />

      { projectsWithBlogs.map(
        proj => 
        <ProjectCard 
          project={proj} 
          key={proj.name} 
          />
        )
      }

    </Layout>
  )
}

export default IndexPage