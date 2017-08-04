import  React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends Component{
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',

  }

  change = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value})
    this.setState({   
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    // this.props.onSubmit(this.state)

    this.setState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    })
    this.props.onChange({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    })
  }

  render(){
    return(
      <form>


        <TextField
          className="input"
          floatingLabelText="Firstname"
          floatingLabelFixed={true}
          name="firstName"
          value={this.state.firstName} 
          onChange={ e => this.change(e) } 
          />

          <TextField
            className="input"
            floatingLabelText="Lastname"
            floatingLabelFixed={true}
            name="lastName" 
            value={this.state.lastName}
            onChange={ e => this.change(e) }  
          />

          <TextField
            className="input"
            floatingLabelText="Username"
            floatingLabelFixed={true}
            name="username" 
            value={this.state.username} 
            onChange={ e => this.change(e) } 
          />

          <TextField
            className="input"
            floatingLabelText="Email"
            floatingLabelFixed={true}
            name="email" 
            type="email"
            value={this.state.email} 
            onChange={ e => this.change(e) }  
          />

           <TextField
            className="input"
            floatingLabelText="Password"
            floatingLabelFixed={true}
            name="password"
            type="password"
            value={this.state.passeword} 
            onChange={ e => this.change(e) } 
          />

           <RaisedButton label="Submit"  onClick={e => this.onSubmit(e)} />

      </form>
    )
  }
}

export default Form