import React, { Component } from 'react';
import Question from './Question';
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      questionIndex: 0,
      className: 'hide',
      toastTitle: '',
      description: '',
      toastButton: '',
      classes: 'Answer'
    }
  }

  componentDidMount() {  
    fetch('http://memoize-datasets.herokuapp.com/api/v1/empracticequestions')
        .then(response => response.json())
        .then(EMpracticeQuestions => {
          this.setState({questions: EMpracticeQuestions.EMpracticeQuestions})
      })
        .catch(error => {throw new Error(error)})
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('questions', JSON.stringify(nextState.questions));
  }

  changeQuestion = () => {
    this.setState({
      className: 'hide',
    })
    this.setState({questionIndex: (this.state.questionIndex + 1)})
  }

  launchToast = (mssg, desc, b1, b2) => {
    this.setState({
      className: 'show',
      toastTitle: mssg,
      description: desc,
      toastButton: b1
    })
  }

  render() {
    return (
      this.state.questions.length &&
      <div className="App">
        <div id="toast" className={this.state.className}>
          <div id="toast-title">{this.state.toastTitle}</div>
          <div id="desc">{this.state.description}</div>
          <button id="choice-1" onClick={this.changeQuestion}>{this.state.toastButton}</button>
        </div>
        <Header />
        <Question classes={this.state.classes} launchToast={this.launchToast} question={this.state.questions[this.state.questionIndex]} correctAnswer={this.state.questions[this.state.questionIndex].correctAnswer}/>
      </div>
    
    );
  }
}

export default App;
