import React from 'react'
import {Redirect} from 'react-router-dom'

class GTimer extends React.Component{
  constructor(props) {
      super(props);
      this.state= {
        count: 100,
        redirect: false,
      }
      this.handleRedirect = this.handleRedirect.bind(this);
    }
    handleRedirect = () => {
      this.setState({
        redirect: !this.state.redirect
      })
    }
    componentDidUpdate() {
      if (this.state.redirect) {
        this.setState({
          redirect: false
        })
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
      this.handleRedirect()
    }
    const { redirect } = this.state;
    if (redirect) {
       return <Redirect to='/results'/>;
     }

    return (
        <div><h2>Game overall {count}</h2></div>
      );
    }
  }
  export default GTimer