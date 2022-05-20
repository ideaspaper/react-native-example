import { SET_USERS, SET_USERS_ERROR, SET_USERS_LOADING } from '../actionTypes/usersActionType';

const initialState = {
  users: [],
  usersError: null,
  usersLoading: true
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    case SET_USERS_ERROR:
      return { ...state, usersError: action.payload };
    case SET_USERS_LOADING:
      return { ...state, usersLoading: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
