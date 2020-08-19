import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Launch from './Components/Launch'
import Results from './Components/Results';
import QTimer from './Components/QTimer';



class App extends React.Component {
  state = {
    redirect: false,
    answeredA: [],
    missedA: ['1 + 4', '1 + 1'],
  }
  handleRedirect = () => {
    this.setState({
      redirect: !this.state.redirect
    })
  }
  
  render() {
    console.log(this.state.answeredA.indexOf())
  return (
   
    <div className="App">
      <Switch>
        <Route exact path='/' component={Launch}/>
        <Route exact path='/game' render={() => <QTimer
        missedA={this.state.missedA} answeredA={this.state.answeredA}/>}
        />
        <Route exact path='/results' render={() =>  <Results 
        answeredA={this.state.answeredA}
        missedA={this.state.missedA}/>}
        />
      </Switch>
    </div>
  );
}
  
}
export default App;