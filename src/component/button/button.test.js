import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import { findByTestAttribute, checkProps } from '../../utils/testUTL';
import Button from './button';

describe('<Button />', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {},
      };
      const propsError = checkProps(Button, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Render', () => {
    let wrapper;
    let mockFnc;
    beforeEach(() => {
      mockFnc = jest.fn();

      const props = {
        buttonText: 'Example Button Text',
        emitEvent: mockFnc,
      };
      wrapper = shallow(<Button {...props} />);
    });

    it('Should render a button', () => {
      const button = findByTestAttribute(wrapper, 'button-component');
      expect(button.length).toBe(1);
    });

    it('Should emit callback on click event', () => {
      const button = findByTestAttribute(wrapper, 'button-component');
      button.simulate('click');
      const callBack = mockFnc.mock.calls.length;
      expect(callBack).toBe(1);
    });
  });
});
