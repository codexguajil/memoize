import React, { Component } from 'react';
import { practiceQuestions } from './data.js';
import Question from './Question';
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: practiceQuestions
    }
  }

  //methods go here

  render() {
    return (
      <div className="App">
        <Header />
        <Question questions={this.state.questions}/>
      </div>
    );
  }
}

export default App;
