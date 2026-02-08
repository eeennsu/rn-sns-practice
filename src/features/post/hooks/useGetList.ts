import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { POST_KEYS } from '@entities/post/consts';
import { IPost } from '@entities/post/types';

import { PAGE_SIZE } from '@consts/commons';

import apiGetPosts from '../apis/getList';

interface IReturn {
  data?: IPost[];
  isLoading: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

const useGetPostList = (): IReturn => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [POST_KEYS.GET_LIST],
      queryFn: ({ pageParam = 1 }) =>
        apiGetPosts({ page: pageParam, pageSize: PAGE_SIZE.DEFAULT }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length < PAGE_SIZE.DEFAULT) return undefined;
        return allPages.length + 1;
      },
    });

  const postListData = useMemo(() => data?.pages?.flat() || [], [data]);

  return {
    data: postListData,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useGetPostList;
