import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {

  state = {
    users:[
      {username:'Christian'},
      {username:'Carl'}
    ]
  }

  changeUserHandler = (event) => {

  }
  
  render() {
    return (
      <div className="App">
        <h1>Assignment 1 - Let's Roll!</h1>
        
        <UserInput
        
        ></UserInput>
        
        <UserOutput
          username={this.state.users[0].username}>
          onClick={}</UserOutput>
      </div>
    );
  }
}

export default App;
