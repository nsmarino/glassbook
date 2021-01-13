import React from 'react'
import { Link } from 'gatsby'
import { BlogPostData } from '../../types'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { block } from '../styles/block'

const BlogPostCard: React.FC<{blogPost: BlogPostData, currentTag: string}> = ({ 
  blogPost: {
    frontmatter: {
      project,
      slug,
      title,
      tags
    }
  },
  currentTag 
}) => {

  return (
    <>
    { (tags.includes(currentTag) || currentTag === '' || currentTag === project) &&
    <div css={css`${block}`}>
      <h2><Link to={`${slug}`}>{title}</Link></h2>
      <p>{project}</p>
    </div>
    }
    </>
  )
}

export default BlogPostCard