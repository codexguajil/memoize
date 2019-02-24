import React, { Component } from 'react';

class Answer extends Component {
  constructor(props) {
    super(props)
  }

  checkAnswer = (e) => {
    console.log(e.target.innerHTML)
    this.props.checkAnswer(e.target.innerHTML);
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