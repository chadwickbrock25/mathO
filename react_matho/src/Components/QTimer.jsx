import React from 'react'
import AnswerBox from './AnswerBox'
import TestQ from '../Questions'

class QTimer extends React.Component{
  constructor(props) {
      super(props);
      this.state= {
        count: 10,
        missed: []
      }
      this.resetTime = this.resetTime.bind(this);
    }
    componentDidMount(){
      this.getQuestion()
      this.myInterval = setInterval(()=> {
        if(this.state.count > 0) {
          this.setState(prevState => ({
            count:prevState.count -1
          }))
        } else {
          clearInterval(this.myInterval)
        }
      }, 1000)
      
  }
  resetTime() {
    this.setState({count: 10}) 
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
    let count= this.state.count
    if(count === 0) {
      console.log(this.state.Qid)
      this.props.missedA.push(this.state.Qid)
      this.state.count = 10
      this.getQuestion()
  }
      return (
        <div>
          <h1>Game</h1>
          {'QID '+ this.state.Qid}<br/>
          {this.state.problem}<br/>

          <h2>Timer Layer{count}</h2>
          <AnswerBox
          missedA={this.props.missedA}
          answeredA={this.props.answeredA}
          problem={this.state.problem}
          answer={this.state.answer}
          Qid={this.state.Qid}
          question={this.getQuestion}
          resetTime={this.resetTime}
          />
          {this.state.answer}
          </div>
      );
    }
  }
  export default QTimer