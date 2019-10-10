import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'

const SignOutLinks = () => {
  return (
    <ul>
      <li><NavLink to='/register' className='link'>Register</NavLink></li>
      <li><NavLink to='/signin' className='link'>Sign In</NavLink></li>
    </ul>
  )
}

export default SignOutLinks