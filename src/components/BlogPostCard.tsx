import React from 'react'
import { Link } from 'gatsby'
import { BlogPostData } from '../types'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { CardHeadline, LinkHover, Subtitle, Label } from './styles/scratch'

const BlogPostCard: React.FC<{blogPost: BlogPostData, currentTag: string}> = ({ 
  blogPost: {
    frontmatter: {
      project,
      slug,
      title,
      tags,
      date
    }
  },
  currentTag 
}) => {
  return (
    <>
    { (tags.includes(currentTag) || currentTag === '' || currentTag === project) &&
    <div css={css`
      margin-bottom: 3rem;
      .date {
        ${Subtitle}
      }

      .info p {
        ${Label}
      }
      h2 {
        ${CardHeadline}
        width: fit-content;
        a {
          ${LinkHover}
        }
      }
      a {
        color: inherit;
        text-decoration: inherit;
      } 
    `}>
      <p className="date">{date}</p>
      <h2><Link to={`${slug}`}>{title}</Link></h2>
      <div className="info">
        <p>{project}</p>
        {tags.map(tag=><p key={tag}>{tag}</p>)}
      </div>
    </div>
    }
    </>
  )
}

export default BlogPostCard