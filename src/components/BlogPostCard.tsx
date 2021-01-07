import React from 'react'
import { Link } from 'gatsby'
import { BlogPost } from '../types'

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
    <>
    { (tags.includes(currentTag) || currentTag === '' || currentTag === project) &&
    <div>
      <h2><Link to={`${slug}`}>{title}</Link></h2>
      <p>{project}</p>
    </div>
    }
    </>
  )
}

export default BlogPostCard