import { SET_POSTS, SET_POSTS_ERROR, SET_POSTS_LOADING } from '../actionTypes/postsActionType';

export const setPosts = (payload) => {
  return { type: SET_POSTS, payload };
};

export const setPostsError = (payload) => {
  return { type: SET_POSTS_ERROR, payload };
};

export const setPostsLoading = (payload) => {
  return { type: SET_POSTS_LOADING, payload };
};

export const fetchPosts = () => {
  return (dispatch, getState) => {
    dispatch(setPostsError(null));
    dispatch(setPostsLoading(true));
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) throw new Error('cannot fetch posts');
        return response.json();
      })
      .then((data) => {
        dispatch(setPosts(data));
      })
      .catch((error) => {
        dispatch(setPostsError(error.message));
      })
      .finally(() => {
        dispatch(setPostsLoading(false));
      });
  };
};
