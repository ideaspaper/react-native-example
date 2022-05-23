import { VStack, Box, Divider, Text, Heading } from 'native-base';

const PostCard = ({ post }) => {
  return (
    <Box borderWidth="1" borderColor="gray.300" mb="4" borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <Box px="4" pt="4">
          <Heading size="md" mb="3">
            {post.title}
          </Heading>
        </Box>
        <Box px="4" pb="4">
          <Text>{post.body}</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default PostCard;
