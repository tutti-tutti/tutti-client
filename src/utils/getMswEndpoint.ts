import { SERVER_API_BASE_URL } from '@/constants';

export const getMswEndpoint = (endpoint: string) => {
  return `${SERVER_API_BASE_URL}${endpoint}`;
};
