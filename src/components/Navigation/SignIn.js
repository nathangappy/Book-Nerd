import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'

const SignInLinks = () => {
  return (
    <ul>
      <li><NavLink to='/addbook' className='link'>Add Book</NavLink></li>
      <li><NavLink to='/signout' className='link'>Sign Out</NavLink></li>
    </ul>
  )
}

export default SignInLinks