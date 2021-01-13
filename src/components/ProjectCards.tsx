import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { ProjectData } from '../types'
import ProjectCard from "./cards/ProjectCard"
import { containerCSS } from "./styles/container"

interface CardsCompProps {
  projects: ProjectData[]
}

const ProjectCards: React.FC<CardsCompProps> = ( { projects }) => {
  return (
  <main css={css`${containerCSS}`}>
    {projects.map(project => <ProjectCard project={project} key={project.name} />
    )}
  </main>
  )
}

export default ProjectCards