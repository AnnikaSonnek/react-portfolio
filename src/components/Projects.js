/* eslint-disable react/no-array-index-key */
import React from 'react';
import projects from './projects.json';

export const Projects = () => {
  return (
    <>
      {projects.map((project) => {
        return (
          <div key={project.name}>
            <p>{project.name}</p>
            <p>{project.description}</p>
            {project.tech.map((item, index) => {
              return (
                <span key={index}>{item}</span>
              )
            })}
            <p>{project.githublink}</p>
            <p>{project.livelink}</p>
          </div>
        )
      })}
    </>
  )
}