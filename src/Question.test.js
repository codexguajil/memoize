import React from 'react';
import Question from './Question';
import { shallow } from 'enzyme';

describe("Question", () => {

  let wrapper;
  let mockFunction = jest.fn();

  let mockQuestions = [
    {
    "id": 1,
    "question": "What does OOP stand for?",
    "correctAnswer": "Object Oriented Programming",
    "allAnswers": [
      "Object Oriented Poop",
      "Only Ogre Pants",
      "Object Oriented Programming",
      "Object Orientation Painstaking"
    ],
    "category": "oop"
  },
  {
    "id": 2,
    "question": "Which terminal command creates a new directory?",
    "correctAnswer": "mkdir",
    "allAnswers": [
      "mv",
      "cd",
      "mkdir",
      "git init"
    ],
    "category": "terminal"
  }
  ]

  let mockIndex = 0;

  beforeEach(() => {
    wrapper = shallow (
        <Question launchToast={mockFunction} 
                  changeQuestion={mockFunction} 
                  question={mockQuestions[mockIndex]}
                  correctAnswer={mockQuestions[mockIndex].correctAnswer}
        />
    )
  })


  it("should render the question", () => {
    expect(wrapper).toMatchSnapshot()
  })
})