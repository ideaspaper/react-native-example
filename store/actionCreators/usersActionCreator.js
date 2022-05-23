import { SET_USERS, SET_USERS_ERROR, SET_USERS_LOADING } from '../actionTypes/usersActionType';

export const setUsers = (payload) => {
  return { type: SET_USERS, payload };
};

export const setUsersError = (payload) => {
  return { type: SET_USERS_ERROR, payload };
};

export const setUsersLoading = (payload) => {
  return { type: SET_USERS_LOADING, payload };
};

export const fetchUsers = () => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          if (!response.ok) throw new Error('cannot fetch users');
          return response.json();
        })
        .then((data) => {
          dispatch(setUsers(data));
          resolve();
        })
        .catch((error) => {
          dispatch(setUsersError(error.message));
          reject();
        })
        .finally(() => {
          dispatch(setUsersLoading(false));
        });
    });
  };
};
