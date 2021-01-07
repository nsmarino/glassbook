import React from 'react'
import { Link } from 'gatsby'
import { ProjectData } from '../types'

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
    <div>
      <h2>{name} ({year})</h2>
      <p>{description}</p>
      { blogs.map(b => <Link to={`${b.frontmatter.slug}`} key={b.frontmatter.slug  }>{b.frontmatter.title}</Link>)}
      <img src="https://source.unsplash.com/random/200x200?mountain" alt="unsplash"/>
    </div>
  )
}

export default ProjectCard