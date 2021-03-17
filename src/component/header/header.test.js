import React from 'react';
import { shallow } from 'enzyme';

// Component
import Header from './header';

// UTILS
import { findByTestAttribute } from '../../utils/testUTL';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('<Header />', () => {
  let wrapper;

  // Runs before every single test
  beforeEach(() => {
    wrapper = setUp();
  });

  it('Should render without error', () => {
    const headerComponent = findByTestAttribute(wrapper, 'header-component');
    expect(headerComponent.length).toBe(1);
  });

  it('Should render a logo', () => {
    const headerComponent = findByTestAttribute(wrapper, 'logoPNG');
    expect(headerComponent.length).toBe(1);
  });
});
