import { SET_USER, SET_USER_ERROR, SET_USER_LOADING } from '../actionTypes/userActionType';

const initialState = {
  user: {},
  userError: null,
  userLoading: true
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_USER_ERROR:
      return { ...state, userError: action.payload };
    case SET_USER_LOADING:
      return { ...state, userLoading: action.payload };
    default:
      return state;
  }
};

export default userReducer;
