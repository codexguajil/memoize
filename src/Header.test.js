import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe ("Header", () => {

  it("should render the header", () => {

    let wrapper = <Header />;

    expect(wrapper).toMatchSnapshot();
  })
})