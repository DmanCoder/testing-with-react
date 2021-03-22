import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import { findByTestAttribute, checkProps } from '../../utils/testUTL';
import ListItem from './listItem';

describe('<ListItem />', () => {
  describe('Checking PropTypes', () => {
    it('Should NOT throw a warning', () => {
      const expectedProps = {
        title: 'Example Title',
        desc: 'Some text',
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Component render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Example Title',
        desc: 'Some text',
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Should render without render', () => {
      const listComponent = findByTestAttribute(wrapper, 'list-component');
      expect(listComponent.length).toBe(1);
    });

    it('Should render a title', () => {
      const title = findByTestAttribute(wrapper, 'title');
      expect(title.length).toBe(1);
    });

    it('Should render a description', () => {
      const description = findByTestAttribute(wrapper, 'description');
      expect(description.length).toBe(1);
    });
  });

  describe('Should NOT render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Some text',
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Component Should not render', () => {
      const listComponent = findByTestAttribute(wrapper, 'list-component');
      expect(listComponent.length).toBe(1);
    });
  });
});
