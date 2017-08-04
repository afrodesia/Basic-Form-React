import  React, { Component } from 'react'


class Form extends Component{
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',

  }

  change = (e) => {
    this.setState({
      
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render(){
    return(
      <form>
        <input 
          name="firstName"
          placeholder="First Name" 
          value={this.state.firstName} 
          onChange={ e => this.change(e) } 
          />

          <input
            name="lastName" 
            placeholder="Last Name" 
            value={this.state.lastName}
            onChange={ e => this.change(e) }  
          />

          <input
            name="username" 
            placeholder="Username" 
            value={this.state.username} 
            onChange={ e => this.change(e) } 
          />

          <input
            name="email" 
            placeholder="Email" 
            type="email"
            value={this.state.email} 
            onChange={ e => this.change(e) }  
          />

           <input
            name="password"
            placeholder="Password" 
            type="password"
            value={this.state.passeword} 
            onChange={ e => this.change(e) } 
          />

          <button onClick={e => this.onSubmit(e)}> Submit </button>
      </form>
    )
  }
}

export default Form