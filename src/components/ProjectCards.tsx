import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { ProjectData } from '../types'
import ProjectCard from "./ProjectCard"

interface CardsCompProps {
  projects: ProjectData[]
}

const ProjectCards: React.FC<CardsCompProps> = ( { projects }) => {
  return (
  <>
    {projects.map(project => <ProjectCard project={project} key={project.name} />
    )}
  </>
  )
}

export default ProjectCards