import React from 'react'
import {NavLink} from 'react-router-dom'

function SignInLink() {
  return (
      <ul className="right hide-on-med-and-down">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating blue lighten-1">NLT</NavLink></li>
      </ul>
  )
}
export default SignInLink;