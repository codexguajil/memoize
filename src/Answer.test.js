import React from 'react';
import Answer from './Answer';
import { shallow, mount } from 'enzyme';

const mockAnswer = {
  "id": 11,
    "question": "Which command will show you the specific changes in any unstaged code?",
    "correctAnswer": "git diff",
    "allAnswers": [
      "git changes",
      "show diff",
      "git diff",
      "show change"
    ],
    "category": "git"
}

const toastLaunchMock = jest.fn();

describe("Answer", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
        <Answer answer={mockAnswer}
                correct={mockAnswer.correctAnswer}
                toastLaunch={toastLaunchMock}
        />
    )
  })

  it("should render one of the answer choices", () => {

    expect(wrapper).toMatchSnapshot()
  })

  it("should invoke checkAnswer on click of answer choice", () => {

    const e = {
      target: `<button className="Answer" onClick={this.checkAnswer}>
        git diff
      </button>`
    }

    wrapper.find('.Answer').simulate('click', e);
    
    
  })

}) 