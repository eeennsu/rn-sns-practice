import { QueryClient, type QueryClientConfig } from '@tanstack/react-query';

const utilQueryClient = (config?: QueryClientConfig) =>
  new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 5,
        staleTime: 0,
        notifyOnChangeProps: 'all',
        refetchOnWindowFocus: false,
        retry: 1,
        ...config?.defaultOptions?.queries,
      },
    },
    ...config,
  });
export default utilQueryClient;
