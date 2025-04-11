'use server';
import 'server-only';

import { cookies } from 'next/headers';

import { axiosInstance } from '@/lib';
import { AUTH_ENDPOINTS } from '@/constants';

export const getAccessToken = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('access_token')?.value;

  if (!accessToken) return null;

  return accessToken;
};

export const getRefreshToken = async () => {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get('refresh_token')?.value;

  if (!refreshToken) return null;

  return refreshToken;
};

export const setAccessToken = async (accessToken: string) => {
  const cookieStore = await cookies();

  cookieStore.set('access_token', accessToken, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60,
    path: '/',
  });
};

export const setRefreshToken = async (refreshToken: string) => {
  const cookieStore = await cookies();

  cookieStore.set('refresh_token', refreshToken, {
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60,
    path: '/',
  });
};

export const renewAccessToken = async () => {
  try {
    const { data } = await axiosInstance.post(
      AUTH_ENDPOINTS.UPDATE_ACCESS_TOKEN,
    );
    const { access_token: accessToken } = data;

    await setAccessToken(accessToken);
  } catch (error) {
    console.error(error);
    await removeTokens();
  }
};

export const removeTokens = async () => {
  const cookieStore = await cookies();

  cookieStore.delete('access_token');
  cookieStore.delete('refresh_token');
};
