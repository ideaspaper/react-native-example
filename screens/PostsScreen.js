import { useFocusEffect } from '@react-navigation/native';
import { Text, FlatList } from 'react-native';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, setPosts } from '../store/actionCreators/postsActionCreator';
import PostCard from '../components/PostCard';

const PostsScreen = () => {
  const { posts, postsError, postsLoading } = useSelector((state) => state.postsReducer);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    return <PostCard post={item} />;
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchPosts());
      return () => {
        dispatch(setPosts([]));
      };
    }, [])
  );

  return (
    <>
      {postsLoading && <Text>Loading...</Text>}
      {!postsLoading && postsError && <Text>{postsError}</Text>}
      {!postsLoading && !postsError && (
        <FlatList data={posts} renderItem={renderItem} keyExtractor={(item) => item.id} />
      )}
    </>
  );
};

export default PostsScreen;
