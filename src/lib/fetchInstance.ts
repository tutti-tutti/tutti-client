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

interface FetchResponse<T = unknown> extends Response {
  data: T;
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

  const defaultOptions: FetchOptions = {
    ...options,
    headers,
  };

  try {
    const response = (await fetch(url, defaultOptions)) as FetchResponse<T>;

    if (options.isAuthorized) {
      const accessToken = await getAccessToken();

      if (!accessToken) throw new Error('인증된 사용자가 아닙니다.');

      if (response.status === 401) {
        const refreshToken = await getRefreshToken();

        if (!refreshToken) throw new Error('refreshToken이 만료되었습니다.');

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

            return retryResponse as FetchResponse<T>;
          }
        } catch (error) {
          await removeTokens();
          throw error;
        }
      }
    }

    if (response.headers.get('content-type')?.includes('application/json')) {
      response.data = await response.json();
    }

    return response as FetchResponse<T>;
  } catch (error) {
    throw error;
  }
};

fetchInstance.get = <T>(endpoint: string, options?: FetchOptions) => {
  return fetchInstance<T>(endpoint, { ...options, method: 'GET' });
};

fetchInstance.post = <T, D = Record<string, unknown>>(
  endpoint: string,
  data?: D,
  options?: FetchOptions,
) => {
  return fetchInstance<T>(endpoint, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  });
};

fetchInstance.put = <T, D = Record<string, unknown>>(
  endpoint: string,
  data?: D,
  options?: FetchOptions,
) => {
  return fetchInstance<T>(endpoint, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

fetchInstance.patch = <T, D = Record<string, unknown>>(
  endpoint: string,
  data?: D,
  options?: FetchOptions,
) => {
  return fetchInstance<T>(endpoint, {
    ...options,
    method: 'PATCH',
    body: JSON.stringify(data),
  });
};

fetchInstance.delete = <T>(endpoint: string, options?: FetchOptions) => {
  return fetchInstance<T>(endpoint, { ...options, method: 'DELETE' });
};
