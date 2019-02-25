import React, { Component } from 'react';

class Answer extends Component {
  constructor(props) {
    super(props)
  }

  checkAnswer = (e) => {
    let toastMssg;
    let toastDesc;
    let button1;
    let button2;
    if(e.target.innerHTML !== this.props.correct) {
      e.target.classList.add("incorrect")
      toastMssg = 'Sorry!!! noooooo 😞'
      toastDesc = 'Try again or move on to the next question.'
      button1 = 'Move On'
      button2 = 'Try Again'
    } else {
      e.target.classList.add("correct")
      toastMssg = 'Correct!';
      toastDesc = 'You are on your way to learning code! Continue to the next question. 😊'
      button1 = 'Continue'
      button2 = ''
    }
    
    this.props.toastLaunch(toastMssg, toastDesc, button1, button2)
  }



  render() {
    return (
      <div className="Answer" onClick={this.checkAnswer}>
        {this.props.answer}
      </div>
    )
  }
} 

export default Answer;