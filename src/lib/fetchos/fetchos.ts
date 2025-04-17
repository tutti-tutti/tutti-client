import {
  getAccessToken,
  getRefreshToken,
  removeTokens,
  setAccessToken,
} from '@/services';
import { AUTH_ENDPOINTS } from '@/constants';
import { FetchosError } from './fetchosError';

interface FetchosRequestConfig extends RequestInit {
  baseURL?: string;
  isAuthorized?: boolean;
  timeout?: number;
  headers?: HeadersInit;
}

interface FetchosResponse<T = unknown> extends Response {
  data: T;
}

interface FetchosInstance {
  <T>(
    endpoint: string,
    config?: FetchosRequestConfig,
  ): Promise<FetchosResponse<T>>;
  get<T>(
    endpoint: string,
    config?: FetchosRequestConfig,
  ): Promise<FetchosResponse<T>>;
  post<T, D = Record<string, unknown>>(
    endpoint: string,
    data?: D,
    config?: FetchosRequestConfig,
  ): Promise<FetchosResponse<T>>;
  put<T, D = Record<string, unknown>>(
    endpoint: string,
    data?: D,
    config?: FetchosRequestConfig,
  ): Promise<FetchosResponse<T>>;
  patch<T, D = Record<string, unknown>>(
    endpoint: string,
    data?: D,
    config?: FetchosRequestConfig,
  ): Promise<FetchosResponse<T>>;
  delete<T>(
    endpoint: string,
    config?: FetchosRequestConfig,
  ): Promise<FetchosResponse<T>>;
}

interface FetchosStatic {
  create(config?: FetchosRequestConfig): FetchosInstance;
}

const createFetchosInstance = (
  defaultConfig: FetchosRequestConfig = {},
): FetchosInstance => {
  const {
    baseURL = '',
    headers: defaultHeaders = {},
    timeout: defaultTimeout,
    isAuthorized: defaultIsAuthorized = false,
    ...restDefaultConfig
  } = defaultConfig;

  const fetchos = async <T>(
    endpoint: string,
    config: FetchosRequestConfig = {},
  ) => {
    const url = `${baseURL}${endpoint}`;

    const abortController = new AbortController();
    const timeout = config.timeout || defaultTimeout;

    let timeoutId: NodeJS.Timeout | undefined;

    if (timeout) {
      timeoutId = setTimeout(() => abortController.abort(), timeout);
    }

    const headers = new Headers(defaultHeaders);

    if (config.headers) {
      Object.entries(config.headers).forEach(([key, value]) => {
        if (value) headers.set(key, value);
      });
    }

    const requestConfig: FetchosRequestConfig = {
      ...restDefaultConfig,
      ...config,
      headers,
      signal: abortController.signal,
    };

    const isAuthorized = config.isAuthorized ?? defaultIsAuthorized;

    try {
      if (isAuthorized) {
        const accessToken = await getAccessToken();

        if (accessToken) {
          headers.set('Authorization', `Bearer ${accessToken}`);
        }
      }

      const request = new Request(url, requestConfig);

      const response = (await fetch(request)) as FetchosResponse<T>;

      if (timeoutId) clearTimeout(timeoutId);

      if (!response.ok)
        throw new FetchosError(`요청 실패 ${response.status} error: `, {
          response,
          request,
          data: await response.json(),
          config: requestConfig,
        });

      if (isAuthorized && response.status === 401) {
        const refreshToken = await getRefreshToken();

        if (!refreshToken)
          throw new FetchosError('refreshToken이 만료되었습니다.', {
            response,
            request,
            config: requestConfig,
          });

        try {
          const renewAccessTokenResponse = await fetch(
            `${baseURL}${AUTH_ENDPOINTS.UPDATE_ACCESS_TOKEN}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${refreshToken}`,
              },
            },
          );

          if (!renewAccessTokenResponse.ok) {
            await removeTokens();

            throw new FetchosError(
              `요청 실패 ${renewAccessTokenResponse.status} error: `,
              {
                response,
                data: await renewAccessTokenResponse.json(),
                config: requestConfig,
              },
            );
          }

          const { access_token: newAccessToken } =
            await renewAccessTokenResponse.json();

          await setAccessToken(newAccessToken);

          headers.set('Authorization', `Bearer ${newAccessToken}`);

          const retryRequest = new Request(url, {
            ...requestConfig,
            headers,
          });

          const retryResponse = (await fetch(
            retryRequest,
          )) as FetchosResponse<T>;

          if (!retryResponse.ok)
            throw new FetchosError(
              `요청 실패 ${retryResponse.status} error: `,
              {
                response,
                request,
                data: await retryResponse.json(),
                config: requestConfig,
              },
            );

          if (
            retryResponse.headers
              .get('content-type')
              ?.includes('application/json')
          ) {
            retryResponse.data = await retryResponse.json();
          }

          return retryResponse;
        } catch (error) {
          if (!(error instanceof FetchosError)) {
            await removeTokens();
          }

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

  fetchos.get = <T>(endpoint: string, options?: FetchosRequestConfig) => {
    return fetchos<T>(endpoint, { ...options, method: 'GET' });
  };

  fetchos.post = <T, D = Record<string, unknown>>(
    endpoint: string,
    data?: D,
    options?: FetchosRequestConfig,
  ) => {
    return fetchos<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

  fetchos.put = <T, D = Record<string, unknown>>(
    endpoint: string,
    data?: D,
    options?: FetchosRequestConfig,
  ) => {
    return fetchos<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  };

  fetchos.patch = <T, D = Record<string, unknown>>(
    endpoint: string,
    data?: D,
    options?: FetchosRequestConfig,
  ) => {
    return fetchos<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  };

  fetchos.delete = <T>(endpoint: string, options?: FetchosRequestConfig) => {
    return fetchos<T>(endpoint, { ...options, method: 'DELETE' });
  };

  return fetchos;
};

const fetchos: FetchosStatic = {
  create: (config?: FetchosRequestConfig) => {
    return createFetchosInstance(config);
  },
};

export default fetchos;
