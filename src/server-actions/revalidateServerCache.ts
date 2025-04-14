'use server';

import { revalidateTag } from 'next/cache';

export const revalidateServerCache = async (tag: string) => {
  revalidateTag(tag);

  return { isSuccess: true };
};
