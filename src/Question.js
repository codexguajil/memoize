import React, { Component } from 'react';
import Answer from './Answer';

class Question extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="question" id="Question">
        <h3>{this.props.question.question}</h3>
        {
          this.props.question.allAnswers.map(answer => {
            return <Answer checkAnswer={this.checkAnswer} 
                           answer={answer}
                           correct={this.props.question.correctAnswer}
                           toastLaunch={this.props.launchToast}
                    />
          })
        }
        
      </div>
    )
    
  }
}

export default Question;