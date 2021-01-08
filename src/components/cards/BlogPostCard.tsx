import React from 'react'
import { Link } from 'gatsby'
import { BlogPost } from '../../types'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { cardCSS } from '../styles/cards'

const BlogPostCard: React.FC<{blogPost: BlogPost, currentTag: string}> = ({ 
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
    <div css={cardCSS}>
    { (tags.includes(currentTag) || currentTag === '' || currentTag === project) &&
    <div>
      <h2><Link to={`${slug}`}>{title}</Link></h2>
      <p>{project}</p>
    </div>
    }
    </div>
  )
}

export default BlogPostCard