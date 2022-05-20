import { useFocusEffect } from '@react-navigation/native';
import { Text, FlatList } from 'react-native';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, setUsers } from '../store/actionCreators/usersActionCreator';
import UserCard from '../components/UserCard';

const UsersScreen = () => {
  const { users, usersError, usersLoading } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    return <UserCard user={item} />;
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchUsers());
      return () => {
        dispatch(setUsers([]));
      };
    }, [])
  );

  return (
    <>
      {usersLoading && <Text>Loading...</Text>}
      {!usersLoading && usersError && <Text>{usersError}</Text>}
      {!usersLoading && !usersError && (
        <FlatList data={users} renderItem={renderItem} keyExtractor={(item) => item.email} />
      )}
    </>
  );
};

export default UsersScreen;
