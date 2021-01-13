import React from 'react'
import { Link } from 'gatsby'
import { ProjectData } from '../../types'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { block } from '../styles/block'

const ProjectCard: React.FC<{project: ProjectData}> = ({ 
  project: {
    name,
    year,
    description,
    url,
    blogs,
  } 
}) => {
  return (
    <div css={css`${block}`}>
      <h2>{name} ({year})</h2>
      <p>{description}</p>
      { blogs.map(b => <Link to={`${b.frontmatter.slug}`} key={b.frontmatter.slug  }>{b.frontmatter.title}</Link>)}
      <img src="https://source.unsplash.com/random/200x200" alt="unsplash"/>
    </div>
  )
}

export default ProjectCard