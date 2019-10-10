import React from 'react'
import './Register.css'

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: ''
  }
  handeChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <div className='register'>
        <form className='registerForm' onSubmit={this.handleSubmit}>
          <h1>Register for Book Nerd</h1>
          <div className='registerSection'>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' placeholder='Username' onChange={this.handeChange} />
          </div>
          <div className='registerSection'>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' placeholder='Email' onChange={this.handeChange} />
          </div>
          <div className='registerSection'>
            <label htmlFor="password">Password</label>
            <input type="text" id='password' placeholder='Password' onChange={this.handeChange} />
          </div>
          <button>Register</button>
        </form>
      </div>
    )
  }
}

export default Register