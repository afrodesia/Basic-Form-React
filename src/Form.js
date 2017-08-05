import  React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends Component{
  state = {
    firstName: '',
    firstNameError: '',
    lastName: '',
    lastNameError: '',
    username: '',
    usernameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',

  }

  change = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value})
    this.setState({   
      [e.target.name]: e.target.value
    })
  }

  validate = () => {
    let isError = false
    const errors = {
      firstNameError: '',
      lastNameError: '',
      usernameError: '',
      emailError: '',
      passwordError: '',

    }

    if( this.state.username.length < 5 ){
      isError = true
      errors.usernameError = 'Username needs to be atleast 5 charaters'
    }

    if( this.state.email.indexOf('@') === -1){
      isError = true
      errors.emailError = 'Email needs and @ symbol'
    }

    if(isError){
      this.setState({
        ...this.state,
        ...errors
      })
    }
    return isError
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
        
    })
    // Check for errors
    const err = this.validate()

    if(!err){
      // Clear Form
      this.setState({
        firstName: '',
        firstNameError: '',
        lastName: '',
        lastNameError: '',
        username: '',
        usernameError: '',
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
      })
      this.props.onChange({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
      })
    }    
  }

  render(){
    return(
      <form>


        <TextField
          className="input"
          floatingLabelText="Firstname"
          floatingLabelFixed={true}
          name="firstName"
          errorText={this.state.firstNameError}
          value={this.state.firstName} 
          onChange={ e => this.change(e) } 
          />

          <TextField
            className="input"
            floatingLabelText="Lastname"
            floatingLabelFixed={true}
            errorText={this.state.lastNameError}
            name="lastName" 
            value={this.state.lastName}
            onChange={ e => this.change(e) }  
          />

          <TextField
            className="input"
            floatingLabelText="Username"
            floatingLabelFixed={true}
            errorText={this.state.usernameError}
            name="username" 
            value={this.state.username} 
            onChange={ e => this.change(e) } 
          />

          <TextField
            className="input"
            floatingLabelText="Email"
            floatingLabelFixed={true}
            errorText={this.state.emailError}
            name="email" 
            type="email"
            value={this.state.email} 
            onChange={ e => this.change(e) }  
          />

           <TextField
            className="input"
            floatingLabelText="Password"
            floatingLabelFixed={true}
            errorText={this.state.passwordError}
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