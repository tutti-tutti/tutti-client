import { removeTokens } from '@/services';

export const signoutAction = async () => {
  await removeTokens();
};
