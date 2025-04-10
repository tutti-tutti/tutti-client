import { AUTH_QUERY_KEY, QUERY_KEYS_ENDPOINT } from '@/constants';
import { fetchMemberData } from '@/services';
import { queryOptions } from '@tanstack/react-query';

export const memberDataQueryOptions = (isLogin: boolean) => {
  return queryOptions({
    queryKey: [QUERY_KEYS_ENDPOINT.MEMBERS, AUTH_QUERY_KEY.MEMBER_DATA],
    queryFn: () => fetchMemberData(),
    staleTime: 60 * 1000,
    refetchOnWindowFocus: true,
    enabled: isLogin,
  });
};
