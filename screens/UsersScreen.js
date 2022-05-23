import { useFocusEffect } from '@react-navigation/native';
import { FlatList } from 'native-base';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsers,
  setUsers,
  setUsersError,
  setUsersLoading
} from '../store/actionCreators/usersActionCreator';
import UserCard from '../components/UserCard';
import SpinnerPage from '../components/SpinnerPage';
import ActionAlert from '../components/ActionAlert';
import useAlertAction from '../hooks/useAlertAction';
import ErrorPage from '../components/ErrorPage';

const UsersScreen = () => {
  const { users, usersError, usersLoading } = useSelector((state) => state.usersReducer);
  const [alertShow, setAlertShow, alertMessage, setAlertMessage, alertStatus, setAlertStatus] =
    useAlertAction();
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    return <UserCard user={item} />;
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchUsers()).catch(() => {
        setAlertMessage(usersError);
        setAlertStatus('error');
        setAlertShow(true);
      });
      return () => {
        dispatch(setUsersLoading(true));
        dispatch(setUsersError(null));
        dispatch(setUsers([]));
        setAlertShow(false);
      };
    }, [dispatch])
  );

  return (
    <>
      {alertShow && (
        <ActionAlert
          show={alertShow}
          message={alertMessage}
          status={alertStatus}
          handleCloseAlert={() => setAlertShow(false)}
        />
      )}
      {usersLoading && <SpinnerPage loadingText="fetching users" />}
      {!usersLoading && usersError && <ErrorPage />}
      {!usersLoading && !usersError && (
        <FlatList
          p="4"
          mb="4"
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.email}
        />
      )}
    </>
  );
};

export default UsersScreen;
