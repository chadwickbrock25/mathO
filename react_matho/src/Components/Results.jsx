import React from 'react'
const baseURL = "http://localhost:3003/results";
class Results extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     results: [],
   }
   this.getResults= this.getResults.bind(this);
 }
 
 getAPI() {
   fetch(baseURL+ '/')
     .then(data => {
       return data.json()},
       err => console.log(err))
     .then(parsedData => this.setState({holidays: parsedData}),
      err=> console.log(err))
 }
 getResults(){
  let results = []
  let missedA = this.props.missedA
  for(let i=0;i <= missedA.length; i++){
    results.push(missedA[i])
    
  }
  return (<li>{results}</li>)
 }
  render () {
    const resultsM = this.props.missedA.map((number) =>
    <li>{number}</li>);

    const resultsA = this.props.answeredA.map((number) =>
    <li>{number}</li>);
    
    const Mindex = this.props.missedA.length
    const Aindex = resultsA.length
    const ratio = (Aindex) + '/' + (Mindex + Aindex)
   return (
     <div className='container'>
      <h1>Results</h1>
      <p>Questions Missed</p>
      {resultsM}
      <p>Answered Correctly</p>
      {ratio}
      
        
     </div>
   )
 }
}

export default Results