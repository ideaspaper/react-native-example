import { SET_USER, SET_USER_ERROR, SET_USER_LOADING } from '../actionTypes/userActionType';

export const setUser = (payload) => {
  return { type: SET_USER, payload };
};

export const setUserError = (payload) => {
  return { type: SET_USER_ERROR, payload };
};

export const setUserLoading = (payload) => {
  return { type: SET_USER_LOADING, payload };
};

export const fetchUser = (userEmail) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/users?email=${userEmail}`)
        .then((response) => {
          if (!response.ok) throw new Error('cannot fetch user');
          return response.json();
        })
        .then((data) => {
          dispatch(setUser(data[0]));
          resolve();
        })
        .catch((error) => {
          dispatch(setUserError(error.message));
          reject();
        })
        .finally(() => {
          dispatch(setUserLoading(false));
        });
    });
  };
};
