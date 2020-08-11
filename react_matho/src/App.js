import React, { Component} from 'react';
import './App.css';
import QTimer from './Components/QTimer';
import GTimer from './Components/GTimer'
import TestQ from './Questions'
import AnswerBox from './Components/AnswerBox'
const baseURL = "http://localhost:3003";


class App extends React.PureComponent {
  state = {
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
    question: [],
    TestQ: TestQ,
    
    
  }
  play() {
    // this.state.question.map(({question, answer}) => (<h4>{question}</h4>))
  }
  getQuestion = () => {
    TestQ().then(question => {
      this.setState({
        question: question
      })
    })
  }
  componentDidMount() {
    this.getQuestion()
  }


  render() {
    this.play()
  return (
    <div className="App">
      <h1>First steps</h1>
      {this.play()}
      <QTimer/>
      <GTimer/>
      {this.state.question.map(({question, answer}) => (<div><h4>{question}</h4> <AnswerBox
      question={this.state.question}/><h5>{answer}</h5></div>))}
      
      
    
      
    </div>
  );
}
  
}
export default App;