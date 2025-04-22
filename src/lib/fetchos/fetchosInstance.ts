import fetchos from './fetchos';

import { SERVER_API_BASE_URL } from '@/constants';

const isServer = typeof window === 'undefined';
const baseURL = isServer
  ? SERVER_API_BASE_URL
  : `${window.location.origin}/api`;

export const fetchosInstance = fetchos.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});
