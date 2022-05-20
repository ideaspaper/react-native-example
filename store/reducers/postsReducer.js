import { SET_POSTS, SET_POSTS_ERROR, SET_POSTS_LOADING } from '../actionTypes/postsActionType';

const initialState = {
  posts: [],
  postsError: null,
  postsLoading: true
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.payload };
    case SET_POSTS_ERROR:
      return { ...state, postsError: action.payload };
    case SET_POSTS_LOADING:
      return { ...state, postsLoading: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
