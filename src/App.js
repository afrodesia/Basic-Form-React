import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import './App.css'
import Form from './Form'


injectTapEventPlugin();


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
      <MuiThemeProvider>
        <div className="App">
          <h1>Basic Form - React.js</h1>
          <Form onChange={fields => this.onChange(fields)} />
          <code className="code">{JSON.stringify(this.state.fields, null, 2)}</code>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
