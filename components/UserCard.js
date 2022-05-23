import { useNavigation } from '@react-navigation/native';
import { VStack, Box, Divider, Heading, Text, HStack, Pressable } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UserCard = ({ user }) => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.push('User', { userEmail: user.email });
  };

  return (
    <Pressable onPress={handleOnPress}>
      <Box borderWidth="1" borderColor="gray.300" mb="4" borderRadius="md">
        <VStack space="4" divider={<Divider />}>
          <Box px="4" pt="4">
            <Heading size="lg" mb="3">
              {user.name}
            </Heading>
            <HStack alignItems="center">
              <Box flex="1">
                <Ionicons name="mail" size={20} color="#60a5fa" />
              </Box>
              <Heading flex="10" color="blue.400" size="xs">
                {' '}
                {user.email}
              </Heading>
            </HStack>
          </Box>
          <Box px="4" pb="4">
            <HStack>
              <Box flex="1">
                <Ionicons name="business" size={30} />
              </Box>
              <VStack flex="3" space="2">
                <Heading size="sm" flexWrap="wrap">
                  {user.company.name}
                </Heading>
                <Text color="gray.500" flexWrap="wrap">
                  {user.company.catchPhrase}
                </Text>
                <Text color="gray.500" flexWrap="wrap">
                  {user.company.bs}
                </Text>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default UserCard;
