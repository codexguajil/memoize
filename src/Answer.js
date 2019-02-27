import React, { Component } from 'react';
import soundfile from './assets/Mario_Jumping.mp3';
import soundy from './assets/Blop.mp3';

class Answer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classes: '',
      answer: this.props.answer,
      key: this.props.key
    }
  }

  checkAnswer = (e) => {
    let toastMssg;
    let toastDesc;
    let button1;
    let button2;
    let audio;
    if(this.props.answer !== this.props.correct) {
      this.setState({
        classes: 'incorrect'
      })
      console.log(this.state.answer)
      console.log(this.state)
      toastMssg = 'Sorry!!! noooooo 😞'
      toastDesc = 'Move on to the next question.'
      button1 = 'Move On'
      button2 = 'Try Again'
      audio = new Audio(soundfile)
    } else {
      this.setState({
        classes: 'correct'
      })
      toastMssg = 'Correct!';
      toastDesc = 'You are on your way to learning code! Continue to the next question. 😊'
      button1 = 'Continue'
      button2 = ''
      audio = new Audio(soundy);
    }
      audio.play();
      this.props.toastLaunch(toastMssg, toastDesc, button1, button2)
      this.resetState();
  }

  resetState = () => {
    this.setState({
      classes: ''
    })
  }


  render() {
    return (
      <div className={this.state.classes} className="Answer" onClick={this.checkAnswer}>
        {this.props.answer}
      </div>
    )
  }
} 

export default Answer;