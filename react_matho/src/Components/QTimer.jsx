import React from 'react'


class QTimer extends React.PureComponent{
  constructor(props) {
      super(props);
      this.state= {
        count: 2,
        missed: []
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
    let count= this.state.count
    if(count === 0) {
      console.log(this.props.Qid)
      this.state.missed.push(this.props.Qid)
      this.state.count = 10
      this.props.question()
  }
      return (
        <div><h2>Timer Layer{count}</h2></div>
      );
    }
  }
  export default QTimer