import React from 'react'
import { Link } from 'gatsby'
import { ProjectData } from '../types'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

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
      <img src="https://source.unsplash.com/random/600x600" alt="unsplash"/>
  )
}

export default ProjectCard