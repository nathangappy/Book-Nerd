import React from 'react'
import SignInLinks from './SignIn'
import SignOutLinks from './SignOut'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className='navbar'>
      <h1><NavLink to='/' className='link'>Book Nerd</NavLink></h1>
      <SignInLinks />
      <SignOutLinks />
    </div>
  )
}

export default Navigation