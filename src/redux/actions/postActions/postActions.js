import { GET_POSTS } from './postActionsType';
import axios from 'axios';

export const fetchPostAXN = () => (dispatch) => {
  console.log('running');
  axios
    .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((res) => {
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
