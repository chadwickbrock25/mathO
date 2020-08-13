import React from 'react'
import AnswerBox from './AnswerBox'

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
    render() {
    let count= this.state.count
    if(count === 0) {
      console.log(this.props.Qid)
      this.state.missed.push(this.props.Qid)
      this.state.count = 10
      this.props.question()
  }
      return (
        <div>
          <h2>Timer Layer{count}</h2>
          <AnswerBox
          problem={this.props.problem}
          answer={this.props.answer}
          Qid={this.props.Qid}
          question={this.props.question}
          resetTime={this.resetTime}
          />
          </div>
      );
    }
  }
  export default QTimer