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
    dispatch(setUsersError(null));
    dispatch(setUsersLoading(true));
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) throw new Error('cannot fetch users');
        return response.json();
      })
      .then((data) => {
        dispatch(setUsers(data));
      })
      .catch((error) => {
        dispatch(setUsersError(error.message));
      })
      .finally(() => {
        dispatch(setUsersLoading(false));
      });
  };
};
