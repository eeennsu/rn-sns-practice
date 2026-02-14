import { useCallback, useMemo, type FC } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import useGetUserList from '@features/user/hooks/useGetList';

import { IUser } from '@entities/user/types';

import { PAGE_SIZE } from '@consts/commons';

import { skeletonItemStyle } from '@styles/global';

import UserStoryItem from './UserStoryItem';

import CommonFlashList from '@components/commons/FlashList';
import { ListRenderItemInfo } from '@shopify/flash-list';
import { loadingStyle, noMoreUsersStyle, userStoryListStyle } from './styles';

const UserStoryList: FC = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetUserList();

  const onEndReached = useCallback(() => {
    if (hasNextPage) fetchNextPage();
  }, [hasNextPage, fetchNextPage]);

  const renderItem = useCallback(
    ({ item: user }: ListRenderItemInfo<IUser>) => (
      <UserStoryItem user={user} />
    ),
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
    <CommonFlashList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={userStoryListStyle.wrapper}
      data={data || []}
      ListFooterComponent={ListFooterComponent}
      renderItem={renderItem}
      onEndReached={onEndReached}
    />
  );
};

export default UserStoryList;
