import React from 'react'
import { Link } from 'gatsby'
import { ProjectData } from '../../types'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { ContentCard } from '../styles/scratch'

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
    <div css={css`
      ${ContentCard}
    `}>
      <h2>{name} ({year})</h2>
      <img src="https://source.unsplash.com/random/400x200" alt="unsplash"/>
      

      <div className="info">
      <p>{description}</p>
      <ul>
      { blogs.map(b => <li><Link to={`${b.frontmatter.slug}`} key={b.frontmatter.slug  }>{b.frontmatter.title}</Link></li>)}
      </ul>
      </div>

    </div>
  )
}

export default ProjectCard