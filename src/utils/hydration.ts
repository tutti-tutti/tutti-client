import { dehydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/lib/tanstack';
import type { QueryKey, QueryFunction } from '@tanstack/query-core';

export const getDehydratedState = async (queryOptions: {
  queryKey: QueryKey;
  queryFn: QueryFunction;
  staleTime?: number;
  gcTime?: number;
}) => {
  const queryClient = getQueryClient();

  // 서버에서 데이터 미리 가져오기
  await queryClient.prefetchQuery(queryOptions);

  // 데이터를 dehydrate하여 클라이언트로 전달
  const dehydratedState = dehydrate(queryClient);

  return dehydratedState;
};
