import { AUTH_ENDPOINTS, SERVER_API_BASE_URL } from '@/constants';
import { FetchosError } from './fetchosError';
import {
  getAccessToken,
  getRefreshToken,
  removeTokens,
  setAccessToken,
} from '@/services';

interface FetchOptions extends RequestInit {
  isAuthorized?: boolean;
  timeout?: number;
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

  const abortController = new AbortController();

  let timeoutId: NodeJS.Timeout | undefined;

  if (options.timeout) {
    timeoutId = setTimeout(() => abortController.abort(), options.timeout);
  }

  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');

  const defaultOptions: FetchOptions = {
    ...options,
    headers,
    signal: abortController.signal,
  };

  try {
    if (options.isAuthorized) {
      const accessToken = await getAccessToken();

      if (!accessToken) throw new Error('인증된 사용자가 아닙니다.');

      headers.set('Authorization', `Bearer ${accessToken}`);
    }

    const request = new Request(url, defaultOptions);

    const response = (await fetch(request)) as FetchResponse<T>;

    if (timeoutId) clearTimeout(timeoutId);

    if (!response.ok)
      throw new FetchosError(`요청 실패 ${response.status} error: `, {
        response,
        request,
        data: await response.json(),
        config: defaultOptions,
      });

    if (options.isAuthorized && response.status === 401) {
      const refreshToken = await getRefreshToken();

      if (!refreshToken)
        throw new FetchosError('refreshToken이 만료되었습니다.', {
          response,
          request,
          config: defaultOptions,
        });

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

        if (!refreshResponse.ok) {
          await removeTokens();
          throw new FetchosError(
            `요청 실패 ${refreshResponse.status} error: `,
            {
              response,
              data: await refreshResponse.json(),
              config: defaultOptions,
            },
          );
        }

        const { access_token: newAccessToken } = await refreshResponse.json();

        await setAccessToken(newAccessToken);

        headers.set('Authorization', `Bearer ${newAccessToken}`);

        const retryRequest = new Request(url, {
          ...defaultOptions,
          headers,
        });

        const retryResponse = (await fetch(retryRequest)) as FetchResponse<T>;

        if (!retryResponse.ok)
          throw new FetchosError(`요청 실패 ${retryResponse.status} error: `, {
            response,
            request,
            data: await retryResponse.json(),
            config: defaultOptions,
          });

        if (
          retryResponse.headers
            .get('content-type')
            ?.includes('application/json')
        ) {
          retryResponse.data = await retryResponse.json();
        }

        return retryResponse;
      } catch (error) {
        await removeTokens();
        throw error;
      }
    }

    if (response.headers.get('content-type')?.includes('application/json')) {
      response.data = await response.json();
    }

    return response;
  } catch (error) {
    if (timeoutId) clearTimeout(timeoutId);

    if (error instanceof FetchosError) throw error;

    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new FetchosError('Request timeout');
    }

    throw new FetchosError(
      error instanceof Error ? error.message : 'Unknown error',
    );
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
