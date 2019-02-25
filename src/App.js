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

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('questions', JSON.stringify(nextState.questions));
    console.log('stored')
  }

  changeQuestion = () => {
    let x = document.getElementById("toast")
    let y = document.getElementsByClassName("Answer")
    x.className = x.className.replace("show", "hide");
    for (var i = 0; i < y.length; i++) {
      y[i].classList.remove('correct')
      y[i].classList.remove('incorrect')
    }
    let el = document.getElementById("Question")
    el.removeAttribute('id')
    void el.offsetWidth;
    this.setState({questionIndex: (this.state.questionIndex + 1)})
    el.setAttribute('id', 'Question');
  }

  launchToast = (mssg, desc, b1, b2) => {
    var x = document.getElementById("toast")
    var x1 = document.getElementById("toast-title")
    var y = document.getElementById("desc")
    var but1 = document.getElementById("choice-1")
    var but2 = document.getElementById("choice-2")
    x1.innerHTML = mssg;
    y.innerHTML = desc;
    but1.innerHTML = b1;
    x.className = "show";
  }

  render() {
    return (
      <div className="App">
        <div id="toast">
          <div id="toast-title"></div>
          <div id="desc"></div>
          <button id="choice-1" onClick={this.changeQuestion}></button>
        </div>
        <Header />
        <Question launchToast={this.launchToast} changeQuestion={this.changeQuestion} question={this.state.questions[this.state.questionIndex]} correctAnswer={this.state.questions[this.state.questionIndex].correctAnswer}/>
      </div>
    );
  }
}

export default App;
