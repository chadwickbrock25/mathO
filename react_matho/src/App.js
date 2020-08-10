import React, { Component} from 'react';
import './App.css';
import QTimer from './Components/QTimer';
import GTimer from './Components/GTimer'
const baseURL = "http://localhost:3003";


class App extends Component {
  state = {
    question: '',
    answer: false,
    unanswered:[],
    reviewQ: [],
    correct: [],
    score: 0,
    signUp:false,
    login:false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    loginEmail: "",
    loginPassword: "",
    token:"",
    userid:"",
    baseURL: baseURL,
    
    
  }
  play() {

  }
 
  render() {
    
  return (
    <div className="App">
      <h1>First steps </h1>
      <QTimer/>
      <GTimer/>
    </div>
  );
}
  
}
export default App;