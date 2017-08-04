import React, { Component } from 'react';
import Form from './Form'
import './App.css'



class App extends Component {

  state = {
    fields: {}
  }
  onChange = updatedValue => {
    this.setState({
      fields:{
        ...this.state.fields,
        ...updatedValue
      }
    })
    // console.log('App Component got: ', fields)
  }
  render() {
    return (
      <div className="App">
        <Form onChange={fields => this.onChange(fields)} />
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
      </div>
    );
  }
}

export default App;
