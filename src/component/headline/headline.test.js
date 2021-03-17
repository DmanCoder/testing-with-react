import React from 'react';
import { shallow } from 'enzyme';

// Component
import Headline from './headline';

// Utils
import { findByTestAttribute } from '../../utils/testUTL';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('<Headline />', () => {
  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        description: 'Some Test description',
      };
      wrapper = setUp(props);
    });

    it('Should render without errors', () => {
      const headerComponent = findByTestAttribute(wrapper, 'header-component');
      expect(headerComponent.length).toBe(1);
    });

    it('Should render a h1', () => {
      const headerComponent = findByTestAttribute(wrapper, 'header');
      expect(headerComponent.length).toBe(1);
    });

    it('Should render a description', () => {
      const headerComponent = findByTestAttribute(wrapper, 'description');
      expect(headerComponent.length).toBe(1);
    });
  });

  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('Should not render', () => {
      const headerComponent = findByTestAttribute(wrapper, 'header-component');
      expect(headerComponent.length).toBe(0);
    });
  });
});
