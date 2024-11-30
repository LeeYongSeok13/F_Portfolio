import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectItem({project}) {
  return (
    <>
    <Link to={`/Project/${project.id}`}>
    <p>{project.title}</p>
    <p>{project.description}</p>
    </Link>
    </>
  )
}
