import React from "react"
import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { under768 } from '../components/styles/mediaQueries'

interface iBlogCard {
  node: {
    html: string
    id: string
    frontmatter: {
      slug: string
      title: string
      order: number
      featuredImage: {
        childImageSharp: {
          fluid: FluidObject
        }
      }
    }
  }
}

const CSS_blogList = `
  display: flex;
  padding-bottom: 1rem;
  padding-left: 12.5%;
  padding-right: 25%;
  ${under768} {
    padding-left: 1%;
    padding-right: 1%;
  }
`
const CSS_card = `
width: 250px;
a {
  text-decoration: none;
  color: inherit;
}
:hover   {
  cursor: pointer;
  filter: invert(1);
  h2 {
    filter: invert(1);
    background: var(--fontColor);
    color: var(--bg);
  }
}
margin-bottom: var(--xxl);
margin-right: var(--m);

h2 {
  font-size: var(--s);
  font-family: var(--sans);
  font-weight: normal;
  margin-top: var(--xxs);
  background-color: var(--fg);
  width: fit-content;
  padding: var(--xxs);
}
.imageWrapper {
  width: 250px;
  height: 250px;
}
img {
  max-height: 250px;
}
` 
const Card:React.FC<{blog: iBlogCard}> = ({ blog }) => {
  // console.log(blog.node.frontmatter.featuredImage)
  return (
  <div className="card" css={css`
    ${CSS_card}
  `}>
    <Link to={blog.node.frontmatter.slug}>
      <div className="imageWrapper">
      {blog.node.frontmatter.featuredImage &&
        <Image
          fluid={blog.node.frontmatter.featuredImage.childImageSharp.fluid}
          alt={blog.node.frontmatter.title}
        />      
      }
      </div>
      <h2>{blog.node.frontmatter.title}</h2>
      {/* <p className="body">{blog.node.frontmatter.text}</p> */}
    </Link>
  </div>
  )
}

const BlogList: React.FC = () => { 
  const {allMarkdownRemark: { edges: blogs }} = useStaticQuery(graphql`
    query blogs {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blogs)/"  }}) {
        edges {
          node {
            html
            id
            frontmatter {
              slug
              title
              order
              featuredImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            } 
          }
        }
      }
    }
  `)
  return (
  <section id="blog" css={css`${CSS_blogList}`}>
    {blogs
      .sort((a:iBlogCard,b:iBlogCard)=>
        b.node.frontmatter.order-a.node.frontmatter.order
        )
      .map((blog:iBlogCard) => 
        <Card blog={blog} />
        )
    }
  </section>
  )
}

export default BlogList
