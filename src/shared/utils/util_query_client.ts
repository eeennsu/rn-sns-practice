import { QueryClient, type QueryClientConfig } from '@tanstack/react-query';

const utilQueryClient = (config?: QueryClientConfig) =>
  new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 5, // 5초
        staleTime: 0,
        notifyOnChangeProps: 'all',
        refetchOnWindowFocus: false,
        retry: 1, // 1번 재시도, 총 요청 2번
        ...config?.defaultOptions?.queries,
      },
    },
    ...config,
  });
export default utilQueryClient;
