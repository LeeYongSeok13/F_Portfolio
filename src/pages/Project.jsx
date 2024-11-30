import React from 'react'
import ProjectList from '../components/ProjectList'

export default function Project({project}) {
  return (
    <div>
      <h1>Project Page</h1>
      <ProjectList project={project}/>
    </div>
  )
}
