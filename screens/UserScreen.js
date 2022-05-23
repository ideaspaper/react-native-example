import { useFocusEffect } from '@react-navigation/native';
import { Heading, VStack, HStack, Text, Button } from 'native-base';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUser,
  setUser,
  setUserError,
  setUserLoading
} from '../store/actionCreators/userActionCreator';
import SpinnerPage from '../components/SpinnerPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionAlert from '../components/ActionAlert';
import useAlertAction from '../hooks/useAlertAction';
import ErrorPage from '../components/ErrorPage';

const UserScreen = ({ route }) => {
  const { userEmail } = route.params;
  const { user, userError, userLoading } = useSelector((state) => state.userReducer);
  const [alertShow, setAlertShow, alertMessage, setAlertMessage, alertStatus, setAlertStatus] =
    useAlertAction();

  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchUser(userEmail)).catch(() => {
        setAlertMessage('Oops something wrong happened');
        setAlertStatus('error');
        setAlertShow(true);
      });
      return () => {
        dispatch(setUserLoading(true));
        dispatch(setUserError(null));
        dispatch(setUser({}));
        setAlertShow(false);
      };
    }, [dispatch])
  );

  const handleOnPressEdit = () => {
    setAlertMessage('Function not implemented yet');
    setAlertStatus('warning');
    setAlertShow(true);
  };

  const handleOnPressDelete = () => {
    setAlertMessage('Function not implemented yet');
    setAlertStatus('warning');
    setAlertShow(true);
  };

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
      {userLoading && <SpinnerPage loadingText="fetching user" />}
      {!userLoading && userError && <ErrorPage errorMessage={userError} />}
      {!userLoading && !userError && (
        <VStack space="8" p="6">
          <VStack space="3">
            <Heading size="lg">{user.name}</Heading>
            <HStack space="3">
              <Ionicons name="mail" size={20} color="#60a5fa" />
              <Heading flex="10" color="blue.400" size="xs">
                {user.email}
              </Heading>
            </HStack>
          </VStack>
          <VStack>
            <VStack space="4">
              <Ionicons name="business" size={30} />
              <HStack>
                <VStack flex="1" space="2">
                  <HStack space="4" justifyContent="space-between">
                    <Text fontWeight="bold" flexWrap="wrap">
                      Name
                    </Text>
                    <Text flexWrap="wrap" fontWeight="bold">
                      {user.company.name}
                    </Text>
                  </HStack>
                  <HStack space="4" justifyContent="space-between">
                    <Text fontWeight="bold" flexWrap="wrap">
                      Catchphrase
                    </Text>
                    <Text color="gray.500" flexWrap="wrap">
                      {user.company.catchPhrase}
                    </Text>
                  </HStack>
                  <HStack space="4" justifyContent="space-between">
                    <Text fontWeight="bold" flexWrap="wrap">
                      Name
                    </Text>
                    <Text color="gray.500" flexWrap="wrap">
                      {user.company.bs}
                    </Text>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>
          </VStack>
          <VStack>
            <VStack space="4">
              <Ionicons name="home" size={30} />
              <HStack>
                <VStack flex="1" space="2">
                  <HStack space="4" justifyContent="space-between">
                    <Text fontWeight="bold" flexWrap="wrap">
                      Street
                    </Text>
                    <Text flexWrap="wrap" fontWeight="bold">
                      {user.address.street}
                    </Text>
                  </HStack>
                  <HStack space="4" justifyContent="space-between">
                    <Text fontWeight="bold" flexWrap="wrap">
                      City
                    </Text>
                    <Text color="gray.500" flexWrap="wrap">
                      {user.address.city}
                    </Text>
                  </HStack>
                  <HStack space="4" justifyContent="space-between">
                    <Text fontWeight="bold" flexWrap="wrap">
                      Suite
                    </Text>
                    <Text color="gray.500" flexWrap="wrap">
                      {user.address.suite}
                    </Text>
                  </HStack>
                  <HStack space="4" justifyContent="space-between">
                    <Text fontWeight="bold" flexWrap="wrap">
                      ZIP Code
                    </Text>
                    <Text color="gray.500" flexWrap="wrap">
                      {user.address.zipcode}
                    </Text>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>
          </VStack>
          <HStack space="4">
            <Button onPress={handleOnPressEdit} flex="1" colorScheme="primary">
              Edit
            </Button>
            <Button onPress={handleOnPressDelete} flex="1" colorScheme="secondary">
              Delete
            </Button>
          </HStack>
        </VStack>
      )}
    </>
  );
};

export default UserScreen;
