'use client';

import { useQueryClient } from '@tanstack/react-query';

import { AUTH_QUERY_KEY, QUERY_KEYS_ENDPOINT, LOGOUT } from '@/constants';
import { signoutAction } from '@/server-actions';
import ClickTextButton from './ClickTextButton';

const LogoutButton = () => {
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    await signoutAction();

    queryClient.setQueryData(
      [QUERY_KEYS_ENDPOINT.MEMBERS, AUTH_QUERY_KEY.MEMBER_DATA],
      null,
    );
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEYS_ENDPOINT.MEMBERS, AUTH_QUERY_KEY.MEMBER_DATA],
    });
  };

  return <ClickTextButton onClick={handleLogout}>{LOGOUT}</ClickTextButton>;
};

export default LogoutButton;
