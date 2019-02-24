import React, { Component } from 'react';
import Answer from './Answer';

class Question extends Component {
  constructor(props) {
    super(props);
  }

  getDerivedStateFromProps (props) {
    this.setState({correctAnswer: this.props.question.correctAnswer})
  }

  checkAnswer = (value) => {
    if(value === this.props.question.correctAnswer) {
      console.log('correct!!')
      this.props.changeQuestion();
    } else {
      console.log('sorry!!! noooooo 😞')
    }
  }


  render() {
  return (
    <div>
      <h3>{this.props.question.question}</h3>
      {
        this.props.question.allAnswers.map(answer => {
          return <Answer checkAnswer={this.checkAnswer} 
                         answer={answer}
                         
                  />
        })
      }
      
    </div>
  )
    
  }
}

export default Question;