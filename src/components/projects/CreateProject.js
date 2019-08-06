import React, { Component } from 'react'


class SignUp extends Component {
  state = {
    title:'',
    content:'',

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
          <form  onSubmit={this.handleSubmit} className='white'>
              <h2 className='grey-text text-darken-3'>Create new project</h2>
              <div className='input-field'>
                  <label htmlFor='title' >Title</label>
                  <input type='text' name='title' onChange={this.handleChange}></input>
              </div>
              <div className='input-field'>
                  <label htmlFor='content'>Content</label>
                  <textarea name='content' className='materialize-textarea' onChange={this.handleChange}></textarea>
              </div>
              <div className='input-field'>
                  <button className='btn blue lighten-1 z-depth-0'>Create</button>
              </div>
          </form>
      </div>
    )
  }
}

export default SignUp
