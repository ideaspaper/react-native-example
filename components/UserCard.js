import { View, Text } from 'react-native';

const UserCard = ({ user }) => {
  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  );
};

export default UserCard;
