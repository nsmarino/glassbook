import React from 'react'
import { Link } from 'gatsby'
import { BlogPostData } from '../../types'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { ContentCard } from '../styles/scratch'

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
    <div css={css`
      ${ContentCard}    
    `}>
      <h2><Link to={`${slug}`}>{title}</Link></h2>
      <div className="info">
        <p>{project}</p>
      </div>
    </div>
    }
    </>
  )
}

export default BlogPostCard