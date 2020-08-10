import React from 'react'


class QTimer extends React.PureComponent{
  constructor(props) {
      super(props);
      this.state= {
        count: 10
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
      return (
        <div><h2>Timer Layer{count}</h2></div>
      );
    }
  }
  export default QTimer