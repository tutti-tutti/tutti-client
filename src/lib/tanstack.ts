import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';

// React의 cache를 사용하여 요청별로 QueryClient 인스턴스 유지
export const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          // 서버에서 hydrate된 데이터는 이미 최신 상태로 간주
          staleTime: 1000 * 60 * 5, // 5분

          // 서버 데이터가 없는 경우에만 클라이언트에서 새로 요청하도록 설정
          refetchOnMount: 'always',
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
        },
      },
    }),
);
