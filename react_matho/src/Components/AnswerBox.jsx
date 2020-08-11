import React, {useState} from 'react'

class AnswerBox extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state= {
          
        }
      }
    
    render() {
        console.log(this.props.question)
    return (
        <div className="answerBox">
            <div className="questionAB">
                <form>
                    <input type="text" name="name" />
                    <input type="submit" value="Submit" />
                </form>
                    {/* {answer} */}
            </div>
        </div>
    )}
}
export default AnswerBox