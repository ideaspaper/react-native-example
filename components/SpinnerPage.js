import { HStack, Spinner } from 'native-base';

const SpinnerPage = () => {
  return (
    <HStack flex="1" justifyContent="center" alignItems="center">
      <Spinner mr="2" size="lg" />
    </HStack>
  );
};

export default SpinnerPage;
