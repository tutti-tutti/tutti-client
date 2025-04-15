'use client';

import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { revalidateServerCache } from '@/server-actions';

export const useRevalidateServerClient = () => {
  const queryClient = useQueryClient();

  const revalidateServerClient = useCallback(
    async (tag: string, queryKey: Array<string>) => {
      await revalidateServerCache(tag);

      queryClient.invalidateQueries({ queryKey });
    },
    [queryClient],
  );

  return { revalidateServerClient };
};
