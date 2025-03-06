import axios from 'axios';

import {
  API_ROUTE_BASE_URL,
  SERVER_API_BASE_URL,
  SERVER_API_VERSION_V1,
} from '@/constants';

const isServer = typeof window === 'undefined';

const baseURL = isServer
  ? `${SERVER_API_BASE_URL}${SERVER_API_VERSION_V1}`
  : API_ROUTE_BASE_URL;

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});
