import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div className='container'>
          <form  onSubmit={this.handleSubmit}  className='white' style={{marginTop: '1rem'}}>
              <h2 className='grey-text text-darken-3'>Sign In</h2>
              <div className='input-field'>
                  <label htmlFor='email' >Email</label>
                  <input type='email' name='email' onChange={this.handleChange}></input>
              </div>
              <div className='input-field'>
                  <label htmlFor='password'>Password</label>
                  <input type='password' name='password' onChange={this.handleChange}></input>
              </div>
              <div className='input-field'>
                  <button className='btn blue lighten-1 z-depth-0'>Login</button>
              </div>
          </form>
      </div>
    )
  }
}

export default SignIn
