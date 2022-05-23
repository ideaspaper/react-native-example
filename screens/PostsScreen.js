import { useFocusEffect } from '@react-navigation/native';
import { Text, FlatList } from 'native-base';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPosts,
  setPosts,
  setPostsError,
  setPostsLoading
} from '../store/actionCreators/postsActionCreator';
import PostCard from '../components/PostCard';
import SpinnerPage from '../components/SpinnerPage';

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
        dispatch(setPostsLoading(true));
        dispatch(setPostsError(null));
        dispatch(setPosts([]));
      };
    }, [dispatch])
  );

  return (
    <>
      {postsLoading && <SpinnerPage loadingText="fetching posts" />}
      {!postsLoading && postsError && <Text>{postsError}</Text>}
      {!postsLoading && !postsError && (
        <FlatList
          padding="4"
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </>
  );
};

export default PostsScreen;
