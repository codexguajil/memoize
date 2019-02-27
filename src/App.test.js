import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


describe("App", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
        <App />
    )
  })

  it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render our toast and update our app`s state', () => {

    expect(wrapper.state('className')).toEqual('hide');
    wrapper.instance().launchToast();
    expect(wrapper.state('className')).toEqual('show');
  })
})