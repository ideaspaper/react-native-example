import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import userReducer from './userReducer';
import postsReducer from './postsReducer';
export default combineReducers({ usersReducer, userReducer, postsReducer });
