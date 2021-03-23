import moxios from 'moxios';
import { testStore } from '../utils/testUTL';
import { fetchPostAXN } from '../redux/actions/postActions/postActions';

describe('fetchPosts action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('Should update store correctly', () => {
    const expectedState = [
      {
        title: 'Example title 1',
        body: 'Some Text',
      },
      {
        title: 'Example title 2',
        body: 'Some Text',
      },
      {
        title: 'Example title 3',
        body: 'Some Text',
      },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPostAXN()).then(() => {
      const newState = store.getState();
      expect(newState.postRXS).toBe(expectedState);
    });
  });
});
