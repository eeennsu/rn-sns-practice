import { IUser } from '@entities/user/types';
import useGetUserList from '@features/main/hooks/useGetList';
import { userListStyle } from '@styles/global';
import { useCallback, type FC } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import UserStoryItem from './UserStoryItem';
import { loadingStyle } from './styles';

const UserList: FC = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetUserList();

  const onEndReached = useCallback(() => {
    if (hasNextPage) {
      console.log('fetchNextPage');
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage]);

  const keyExtractor = useCallback(
    (_: IUser, index: number) => index.toString(),
    [],
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={userListStyle.wrapper}
      data={data || []}
      ListFooterComponent={
        isFetchingNextPage ? (
          <View style={loadingStyle.wrapper}>
            <ActivityIndicator size="small" color="#aaa" />
          </View>
        ) : null
      }
      renderItem={({ item: user }) => <UserStoryItem user={user} />}
      keyExtractor={keyExtractor}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

export default UserList;
