import React from 'react'
import ProjectItem from './ProjectItem'

export default function ProjectList({project}) {
  return (
    <div>
      {project.map((item) => {
        return <ProjectItem key={item.id} project={item}/>
      })}
    </div>
  )
}
