import { AUTH_ENDPOINTS, SERVER_API_BASE_URL } from '@/constants';
import {
  getAccessToken,
  getRefreshToken,
  removeTokens,
  setAccessToken,
} from '@/services';

interface FetchOptions extends RequestInit {
  isAuthorized?: boolean;
}

interface FetchResponse<T> extends Response {
  data?: T;
}

const isServer = typeof window === 'undefined';
const baseURL = isServer
  ? SERVER_API_BASE_URL
  : `${window.location.origin}/api`;

export const fetchInstance = async <T>(
  endpoint: string,
  options: FetchOptions = { isAuthorized: false },
): Promise<FetchResponse<T>> => {
  const url = `${baseURL}${endpoint}`;

  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');

  const accessToken = await getAccessToken();

  const defaultOptions: FetchOptions = {
    ...options,
    headers,
  };

  try {
    if (accessToken && options.isAuthorized) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }

    const response = (await fetch(url, defaultOptions)) as FetchResponse<T>;

    if (response.status === 401 && options.isAuthorized) {
      const refreshToken = await getRefreshToken();

      if (refreshToken) {
        try {
          const refreshResponse = await fetch(
            `${baseURL}${AUTH_ENDPOINTS.UPDATE_ACCESS_TOKEN}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${refreshToken}`,
              },
            },
          );

          if (refreshResponse.ok) {
            const { access_token: newAccessToken } =
              await refreshResponse.json();

            await setAccessToken(newAccessToken);

            headers.set('Authorization', `Bearer ${newAccessToken}`);

            const retryResponse = (await fetch(url, {
              ...defaultOptions,
              headers,
            })) as FetchResponse<T>;

            if (
              retryResponse.headers
                .get('content-type')
                ?.includes('application/json')
            ) {
              retryResponse.data = await retryResponse.json();
            }

            return retryResponse.json();
          }
        } catch (error) {
          console.error('토큰 갱신 실패:', error);
          await removeTokens();
        }
      }
    }

    if (response.headers.get('content-type')?.includes('application/json')) {
      response.data = await response.json();
    }

    return response;
  } catch (error) {
    console.error('API 요청 실패:', error);
    throw error;
  }
};

fetchInstance.get = (endpoint: string, options?: FetchOptions) => {
  return fetchInstance(endpoint, { ...options, method: 'GET' });
};

fetchInstance.post = <
  T,
  D extends Record<string, unknown> = Record<string, unknown>,
>(
  endpoint: string,
  data?: D,
  options?: FetchOptions,
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
  options?: FetchOptions,
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
  options?: FetchOptions,
): Promise<FetchResponse<T>> => {
  return fetchInstance(endpoint, {
    ...options,
    method: 'PATCH',
    body: JSON.stringify(data),
  });
};

fetchInstance.delete = (endpoint: string, options?: FetchOptions) => {
  return fetchInstance(endpoint, { ...options, method: 'DELETE' });
};
