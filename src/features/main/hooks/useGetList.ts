import { USER_KEYS } from '@entities/user/consts';
import { useInfiniteQuery } from '@tanstack/react-query';
import apiGetUsers from '../apis/getUsers';
import { IUser } from '@entities/user/types';
import { useMemo } from 'react';
import { PAGE_SIZE } from '@consts/commons';

interface IReturn {
  data?: IUser[];
  isLoading: boolean;
  isFetching: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

const useGetUserList = (): IReturn => {
  const {
    data,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
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
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useGetUserList;
