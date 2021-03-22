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
    beforeEach(() => {
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: () => {},
      };
      wrapper = shallow(<Button {...props} />);
    });

    it('Should render a button', () => {
      const button = findByTestAttribute(wrapper, 'button-component');
      expect(button.length).toBe(1);
    });
  });
});
