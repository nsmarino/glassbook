import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { ProjectData, ProjectJSON, BlogPostData } from '../types'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import Layout from "../components/Layout"
import WorkSample from "../components/WorkSample"
import BlogList from "../components/BlogList"

const IndexPage: React.FC = () => {

  return (
  <Layout title="portfolio">
  <main>
    <WorkSample />
    <BlogList />
  </main>
  </Layout>
  )
}

export default IndexPage

// query for filepath

// {
//   allFile(filter: {relativeDirectory: {eq: "recentwork"}, ext: {eq: ".md"}}) {
//     edges {
//       node {
//         name
//       }
//     }
//   }
// }




// query for html content

// {
//   allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(recentwork)/"  }}) {
//     edges {
//       node {
//         html
//       }
//     }
//   }
// }


  // Retrieve JSON project info and all blog posts titles from data layer
  // const {
  //   allWorksJson: { 
  //     edges: projectInfoEdges
  //   },
  //   allMarkdownRemark: {
  //     edges: blogPostEdges
  //   }
  // } = useStaticQuery(graphql`
  // query MyQuery {
  //   allWorksJson {
  //     edges {
  //       node {
  //         name
  //         year
  //         url
  //         description
  //       }
  //     }
  //   }
  //   allMarkdownRemark {
  //     edges {
  //       node {
  //         frontmatter {
  //           slug
  //           title
  //           project
  //           tags
  //         }
  //       }
  //     }
  //   }
  // }`)

  // const extractNodeFromEdge = (edge: any) => edge.node
  // const projects: ProjectJSON[] = projectInfoEdges.map(extractNodeFromEdge)
  // const blogPosts: BlogPostData[] = blogPostEdges.map(extractNodeFromEdge)

  // const projectsWithBlogs: ProjectData[] = projects.map(
  //   (proj): ProjectData => {
  //   return {
  //     ...proj,
  //     blogs: blogPosts.filter((post) => post.frontmatter.project === proj.name)
  // }})
  // console.log(projectsWithBlogs)