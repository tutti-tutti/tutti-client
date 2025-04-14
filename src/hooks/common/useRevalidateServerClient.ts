'use client';

import { revalidateServerCache } from '@/server-actions';
import { useQueryClient } from '@tanstack/react-query';

export const useRevalidateServerClient = () => {
  const queryClient = useQueryClient();

  const revalidateServerClient = async (
    tag: string,
    queryKey: Array<string>,
  ) => {
    await revalidateServerCache(tag);

    queryClient.invalidateQueries({ queryKey });
  };

  return { revalidateServerClient };
};
