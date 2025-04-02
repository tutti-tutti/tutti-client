import axios from 'axios';

import { SERVER_API_BASE_URL } from '@/constants';
import { getAccessToken, renewAccessToken, removeTokens } from '@/services';

const isServer = typeof window === 'undefined';
const baseURL = isServer
  ? SERVER_API_BASE_URL
  : `${window.location.origin}/api`;

export const staticAxios = axios.create({
  baseURL: SERVER_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 10000,
});

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 10000,
});

if (isServer) {
  axiosInstance.interceptors.request.use(
    async config => {
      const accessToken = await getAccessToken();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },

    error => Promise.reject(error),
  );

  axiosInstance.interceptors.response.use(
    response => response,
    async error => {
      if (error.response?.status === 401 && !error.config._retry) {
        error.config._retry = true;

        try {
          const newAccessToken = await renewAccessToken();

          error.config.headers.Authorization = `Bearer ${newAccessToken}`;

          return axiosInstance(error.config);
        } catch (refreshError) {
          removeTokens();
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    },
  );
}
