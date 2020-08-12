import React from 'react'
import QTimer from './QTimer'

class AnswerBox extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state= {
          value: '',
          answered: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
       
        if(this.state.value === this.props.answer) {
            this.state.answered.push(this.props.Qid)
            console.log(this.state.answered)
        } else {
            alert('Incorrect: ' + this.state.value);
        }
        this.props.question()
        this.state.value = ''
        
        
    }
   
    render() {
        // console.log(QTimer)
        // if(QTimer === 0) {
        //     console.log('PUSH')
        // }
    return (
        <div className="answerBox">
            <div className="questionAB">
                <form onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <QTimer
            question={this.props.question}
            submit={this.handleSubmit}
            // problem={this.props.problem}
            // answer={this.props.answer}
            Qid={this.props.Qid}
            />
        </div>
    )}
}
export default AnswerBox