import React from 'react'

function ProjectDetails(props) {
  const {id} = props.match.params
  return (
    <div className='container section project-details'>
        <div className='card z-depth-0'>
          <div className='card-content'>
            <span className='card-title'>Project Title {id} </span>
            <p>Cards are a convenient means of displaying content composed of different types of objects. They’re also well-suited for presenting similar objects whose size or supported actions can vary considerably, like photos with captions of variable length.</p>
          </div>
          <div className='card-action gret lighten-4 grey-text'>
              <div>Posted by Thierry</div>
              <div>2nd September, 2am</div>
          </div>
        </div>
    </div>
  )
}

export default ProjectDetails
