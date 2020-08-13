import React from 'react'
const baseURL = "http://localhost:3003/results";
class Results extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     
   }
   
 }
 
 getAPI() {
   fetch(baseURL+ '/')
     .then(data => {
       return data.json()},
       err => console.log(err))
     .then(parsedData => this.setState({holidays: parsedData}),
      err=> console.log(err))
 }
  render () {
   return (
     <div className='container'>
      <h1>Results</h1>
      
     </div>
   )
 }
}

export default Results