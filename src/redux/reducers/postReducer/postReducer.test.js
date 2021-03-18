// Post Action Types
import { GET_POSTS } from '../../actions/postActions/postActionsType';

// Post Reducer
import postReducer from './postReducer';

describe('Post Reducer', () => {
  it('Should return default state', () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('Should return new state if receiving type', () => {
    const post = [
      { title: 'Testing 1' },
      { title: 'Testing 2' },
      { title: 'Testing 3' },
    ];

    const newState = postReducer(undefined, {
      type: GET_POSTS,
      payload: post,
    });

    expect(newState).toEqual(post);
  });
});
