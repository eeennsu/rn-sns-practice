import { FC, useCallback, useMemo } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import useGetPostList from '@features/post/hooks/useGetList';

import { IPost } from '@entities/post/types';

import { PAGE_SIZE } from '@consts/commons';

import { skeletonItemStyle } from '@styles/global';

import PostItem from './PostItem';

import SkeletonItem from './SkeletonItem';
import { loadingStyle, noMorePostStyle } from './styles';
import CommonFlashList from '@components/commons/FlashList';
import { ListRenderItemInfo } from '@shopify/flash-list';

const PostList: FC = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPostList();

  const onEndReached = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IPost>) => <PostItem post={item} />,
    [],
  );

  const ListFooterComponent = useMemo(
    () =>
      isFetchingNextPage ? (
        <View style={loadingStyle.wrapper}>
          <ActivityIndicator size="small" color="#aaa" />
        </View>
      ) : !hasNextPage ? (
        <View style={noMorePostStyle.wrapper}>
          <Text style={noMorePostStyle.text}>No more.</Text>
        </View>
      ) : null,
    [isFetchingNextPage, hasNextPage],
  );

  if (isLoading) return <LoadingSkeleton />;

  return (
    <CommonFlashList
      data={data}
      renderItem={renderItem}
      onEndReached={onEndReached}
      ListFooterComponent={ListFooterComponent}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default PostList;

const LoadingSkeleton: FC = () => {
  return (
    <View
      style={{
        gap: 36,
        paddingHorizontal: 24,
        paddingTop: 24,
        width: '100%',
      }}
    >
      {Array.from({ length: PAGE_SIZE.USERS }).map((_, index) => (
        <View
          key={index}
          style={{
            gap: 12,
            width: '100%',
          }}
        >
          <SkeletonItem
            style={{
              ...skeletonItemStyle.item,
              width: '100%',
              height: 200,
            }}
          />
          <SkeletonItem
            style={{
              ...skeletonItemStyle.item,
              width: '45%',
              height: 30,
              borderRadius: 14,
            }}
          />
        </View>
      ))}
    </View>
  );
};
