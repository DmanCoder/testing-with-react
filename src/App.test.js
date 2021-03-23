import React from 'react';
import { shallow } from 'enzyme';

import { testStore, findByTestAttribute } from './utils/testUTL';

import App from './App';

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      postRXS: [
        {
          title: 'Example 1',
          body: 'Some text',
        },
        {
          title: 'Example 2',
          body: 'Some text',
        },
        {
          title: 'Example 3',
          body: 'Some text',
        },
      ],
    };

    wrapper = setup(initialState);
  });

  it('Should render without errors', () => {
    const appComponent = findByTestAttribute(wrapper, 'app-component');
    expect(appComponent.length).toBe(1);
  });
});
