import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { USER_KEYS } from '@entities/user/consts';
import { IUser } from '@entities/user/types';

import { PAGE_SIZE } from '@consts/commons';

import apiGetUsers from '../apis/getStoryList';

interface IReturn {
  data?: IUser[];
  isLoading: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

const useGetUserStoryList = (): IReturn => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [USER_KEYS.GET_LIST],
      queryFn: ({ pageParam = 1 }) =>
        apiGetUsers({ page: pageParam.toString(), pageSize: PAGE_SIZE.USERS }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return lastPage.length === 0 ? undefined : nextPage;
      },
    });

  const userListData = useMemo(() => data?.pages?.flat() || [], [data]);

  return {
    data: userListData,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useGetUserStoryList;
