import { SERVER_API_BASE_URL } from '@/constants';

interface FetchResponse<T> extends Response {
  data?: T;
}

const isServer = typeof window === 'undefined';
const baseURL = isServer
  ? SERVER_API_BASE_URL
  : `${window.location.origin}/api`;

const fetchInstance = async <T>(
  endpoint: string,
  options: RequestInit,
): Promise<FetchResponse<T>> => {
  const url = `${baseURL}${endpoint}`;

  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');

  const defaultOptions: RequestInit = {
    ...options,
    headers,
  };

  const response = (await fetch(url, defaultOptions)) as FetchResponse<T>;

  return response.json();
};

fetchInstance.get = (endpoint: string, options?: RequestInit) => {
  return fetchInstance(endpoint, { ...options, method: 'GET' });
};

fetchInstance.post = <
  T,
  D extends Record<string, unknown> = Record<string, unknown>,
>(
  endpoint: string,
  data?: D,
  options?: RequestInit,
): Promise<FetchResponse<T>> => {
  return fetchInstance(endpoint, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  });
};

fetchInstance.put = <
  T,
  D extends Record<string, unknown> = Record<string, unknown>,
>(
  endpoint: string,
  data?: D,
  options?: RequestInit,
): Promise<FetchResponse<T>> => {
  return fetchInstance(endpoint, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

fetchInstance.patch = <
  T,
  D extends Record<string, unknown> = Record<string, unknown>,
>(
  endpoint: string,
  data?: D,
  options?: RequestInit,
): Promise<FetchResponse<T>> => {
  return fetchInstance(endpoint, {
    ...options,
    method: 'PATCH',
    body: JSON.stringify(data),
  });
};

fetchInstance.delete = (endpoint: string, options?: RequestInit) => {
  return fetchInstance(endpoint, { ...options, method: 'DELETE' });
};

export default fetchInstance;
