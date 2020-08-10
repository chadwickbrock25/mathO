import React from 'react'


class GTimer extends React.PureComponent{
  constructor(props) {
      super(props);
      this.state= {
        count: 60
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
        <div><h2>Game overall {count}</h2></div>
      );
    }
  }
  export default GTimer