import { useCallback, useMemo, type FC } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Text,
  View,
} from 'react-native';

import useGetUserList from '@features/user/hooks/useGetList';

import { IUser } from '@entities/user/types';

import { PAGE_SIZE } from '@consts/commons';

import { skeletonItemStyle } from '@styles/global';

import UserStoryItem from './UserStoryItem';

import { loadingStyle, noMoreUsersStyle, userStoryListStyle } from './styles';

const UserStoryList: FC = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
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
      ) : !isLoading && !hasNextPage ? (
        <View style={noMoreUsersStyle.wrapper}>
          <Text style={noMoreUsersStyle.text}>No more.</Text>
        </View>
      ) : null,
    [isFetchingNextPage, hasNextPage, isLoading],
  );

  if (isLoading) {
    return (
      <View style={userStoryListStyle.wrapper}>
        {Array.from({ length: PAGE_SIZE.USERS }).map((_, index) => (
          <View
            key={index}
            style={[
              skeletonItemStyle.item,
              { borderRadius: 100, width: 54, height: 54 },
            ]}
          />
        ))}
      </View>
    );
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={userStoryListStyle.wrapper}
      data={data || []}
      ListFooterComponent={ListFooterComponent}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.8}
      windowSize={PAGE_SIZE.USERS - 2}
      initialNumToRender={PAGE_SIZE.USERS}
    />
  );
};

export default UserStoryList;
