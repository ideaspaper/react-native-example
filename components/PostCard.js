import { View, Text } from 'react-native';

const PostCard = ({ post }) => {
  return (
    <View>
      <Text>{post.title}</Text>
    </View>
  );
};

export default PostCard;
