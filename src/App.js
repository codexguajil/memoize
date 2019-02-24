import React, { Component } from 'react';
import { practiceQuestions } from './data.js';
import Question from './Question';
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: practiceQuestions,
      questionIndex: 0
    }
  }

  changeQuestion = () => {
    this.setState({questionIndex: (this.state.questionIndex + 1)})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Question changeQuestion={this.changeQuestion} question={this.state.questions[this.state.questionIndex]} correctAnswer={this.state.questions[this.state.questionIndex].correctAnswer}/>
      </div>
    );
  }
}

export default App;
