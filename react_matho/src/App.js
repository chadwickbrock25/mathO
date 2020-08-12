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
    userid:"",
    baseURL: baseURL,
    question: [],
    TestQ: TestQ,
    
    
  }
  componentDidMount() {
    this.getQuestion()
  }
  play() {
    
    let answers= this.state.question.map(({question, answer}) => {
      
    })
    
  }
  getQuestion = () => {
    TestQ().then(question => {
      this.setState({
        TestQ: TestQ,
        problem: question[0].question,
        answer: question[0].answer,
        Qid: question[0].Qid

      })
    })
  }
  


  render() {
   
  return (
    <div className="App">
      <h1>First steps</h1>
      
      {'QID '+ this.state.Qid}<br/>
      <GTimer/>
      {this.state.problem}<br/>
      
      <AnswerBox
      problem={this.state.problem}
      answer={this.state.answer}
      Qid={this.state.Qid}
      question={this.getQuestion}/>

      {this.state.answer}
      
      
      
    
      
    </div>
  );
}
  
}
export default App;