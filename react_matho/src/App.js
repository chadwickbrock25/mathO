import React, { Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Launch from './Components/Launch'
import Results from './Components/Results';
import QTimer from './Components/QTimer';
const baseURL = "http://localhost:3003";


class App extends React.Component {
  state = {
    redirect: false,
    answeredA: [],
    missedA: [],
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
  play() {
  
    
  }
  render() {
  
  return (
   
    <div className="App">
      <Switch>
        <Route exact path='/' component={Launch}/>
        <Route exact path='/game' render={() => <QTimer
        missedA={this.state.missedA} answeredA={this.state.answeredA}/>}
        />
        <Route exact path='/results' render={() =>  <Results redirect={this.state.redirect} handleRedirect={this.handleRedirect}/>}
        />
      </Switch>
    </div>
  );
}
  
}
export default App;