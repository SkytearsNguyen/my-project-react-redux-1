import React from 'react'
import ProjectSummary from './ProjectSummary'

function ProjectList({projects}) {
  return (
    <div className='project-list section'>
      {projects.map(project => {
        return (
          <ProjectSummary key={project.id} project={project} ></ProjectSummary>
        )
      })}

    </div>
  )
}

export default ProjectList
