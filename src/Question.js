import React, { Component } from 'react';
import Answer from './Answer';

export default function Question (props) {

  return (
    <div>
      <h3>{props.questions[0].question}</h3>
        <ul>
          <li>{props.questions[0].correctAnswer}</li>
              { 
                props.questions[0].wrongAnswers.map(answer => {
                return (
                  <li>{answer}</li> 
                  )
                })
              }
        </ul>
    </div>
  )
}