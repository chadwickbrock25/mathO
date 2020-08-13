import React from 'react'
import GTimer from './GTimer'


class AnswerBox extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
          value: '',
          answered: [],
          missed: [],
          count: 10,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        let count = this.state.count
        if(this.state.value === this.props.answer) {
            this.state.answered.push(this.props.Qid)
            console.log(this.state.answered)
            this.props.question()
            this.state.value = ''
            this.props.resetTime()
            alert('🥳🎉🎈 '+'Correct'+ ' 🎊😄🎈')
        } else {
            alert('❌'+' Incorrect: ' +'❌'+ this.props.problem + '=' + this.props.answer);
           
            // this.setState((state) => {
            //     return {count: 10};
            //   });
        }
        
        
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
    
    
      render() {
       
    
    return (
        <div className="answerBox">
            <div className="questionAB">
                
                <form onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                    <input onClick={this.resetTime} type="submit" value="Submit" />
                </form>
                
            </div>
            <GTimer/>
        </div>
    )}
}
export default AnswerBox