import { dehydrate } from '@tanstack/react-query';
import { QueryKey, DehydratedState } from '@tanstack/query-core';
import { QueryObserverOptions } from '@tanstack/react-query';

import { getQueryClient } from '@/lib/tanstack';

export const getDehydratedState = async <
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  // QueryOptions 인터페이스를 사용하여 TanStack Query의 타입 정의를 따름
  queryOptions: QueryObserverOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryFnData,
    TQueryKey
  >,
): Promise<DehydratedState> => {
  const queryClient = getQueryClient();

  // 서버에서 데이터 미리 가져오기
  await queryClient.prefetchQuery(queryOptions);

  // 데이터를 dehydrate하여 클라이언트로 전달
  const dehydratedState = dehydrate(queryClient);

  return dehydratedState;
};
