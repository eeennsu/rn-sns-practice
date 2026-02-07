import { IUser } from '@entities/user/types';
import useGetUserList from '@features/main/hooks/useGetList';
import { userListStyle } from '@styles/global';
import { useCallback, useMemo, type FC } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  View,
} from 'react-native';
import UserStoryItem from './UserStoryItem';
import { loadingStyle } from './styles';

const UserList: FC = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetUserList();

  const onEndReached = useCallback(() => {
    if (hasNextPage) fetchNextPage();
  }, [hasNextPage, fetchNextPage]);

  const keyExtractor = useCallback((item: IUser) => item.id, []);

  const renderItem = useCallback<ListRenderItem<IUser>>(
    ({ item: user }) => <UserStoryItem user={user} />,
    [],
  );

  const ListFooterComponent = useMemo(
    () =>
      isFetchingNextPage ? (
        <View style={loadingStyle.wrapper}>
          <ActivityIndicator size="small" color="#aaa" />
        </View>
      ) : null,
    [isFetchingNextPage],
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={userListStyle.wrapper}
      data={data || []}
      ListFooterComponent={ListFooterComponent}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      windowSize={5}
      initialNumToRender={5}
    />
  );
};

export default UserList;
