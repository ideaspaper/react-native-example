import { Heading, HStack } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ErrorPage = ({ errorMessage }) => {
  return (
    <HStack flex="1" justifyContent="center" alignItems="center" space="3">
      <Ionicons name="alert-circle" size={30} />
      <Heading color="error.400" fontSize="md">
        {errorMessage || 'Something wrong happened'}
      </Heading>
    </HStack>
  );
};

export default ErrorPage;
