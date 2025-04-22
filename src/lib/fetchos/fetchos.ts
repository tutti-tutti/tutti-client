import {
  getAccessToken,
  getRefreshToken,
  removeTokens,
  setAccessToken,
} from '@/services';
import { AUTH_ENDPOINTS } from '@/constants';
import { FetchosError } from './fetchosError';
import type {
  FetchosInstance,
  FetchosRequestConfig,
  FetchosResponse,
  FetchosStatic,
} from './fetchosTypes';

const setupTimeout = (abortController: AbortController, timeout?: number) => {
  if (!timeout) return undefined;

  return setTimeout(() => abortController.abort(), timeout);
};

const setupHeaders = (
  defaultHeaders: HeadersInit = {},
  configHeaders: HeadersInit = {},
) => {
  const headers = new Headers(defaultHeaders);

  Object.entries(configHeaders).forEach(([key, value]) => {
    if (value) headers.set(key, value);
  });

  return headers;
};

const processResponse = async <T>(
  response: Response,
): Promise<FetchosResponse<T>> => {
  const fetchosResponse = response as FetchosResponse<T>;

  if (response.headers.get('content-type')?.includes('application/json')) {
    fetchosResponse.data = await response.json();
  }

  return fetchosResponse;
};

const executeRequest = async <T>(
  request: Request,
  timeoutId?: NodeJS.Timeout,
): Promise<FetchosResponse<T>> => {
  try {
    const response = (await fetch(request)) as FetchosResponse<T>;

    if (timeoutId) clearTimeout(timeoutId);

    if (!response.ok) {
      throw new FetchosError(`요청 실패 ${response.status} error: `, {
        response,
        request,
        data: await response.json(),
        config: { method: request.method, headers: request.headers },
      });
    }

    return await processResponse<T>(response);
  } catch (error) {
    if (timeoutId) clearTimeout(timeoutId);

    throw error;
  }
};

const renewAccessToken = async (baseURL: string, refreshToken: string) => {
  const response = await fetch(
    `${baseURL}${AUTH_ENDPOINTS.UPDATE_ACCESS_TOKEN}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${refreshToken}`,
      },
    },
  );

  if (!response.ok) {
    await removeTokens();
    throw new FetchosError(`토큰 갱신 실패 ${response.status} error: `, {
      response,
      data: await response.json(),
    });
  }

  const { access_token: newAccessToken } = await response.json();

  await setAccessToken(newAccessToken);

  return newAccessToken;
};

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
    const timeoutId = setupTimeout(abortController, timeout);
    const headers = setupHeaders(defaultHeaders, config.headers);
    const isAuthorized = config.isAuthorized ?? defaultIsAuthorized;

    const requestConfig: FetchosRequestConfig = {
      ...restDefaultConfig,
      ...config,
      headers,
      signal: abortController.signal,
    };

    try {
      if (isAuthorized) {
        const accessToken = await getAccessToken();

        if (accessToken) {
          headers.set('Authorization', `Bearer ${accessToken}`);
        }
      }

      const request = new Request(url, requestConfig);
      const response = await executeRequest<T>(request, timeoutId);

      if (isAuthorized && response.status === 401) {
        const refreshToken = await getRefreshToken();

        if (!refreshToken)
          throw new FetchosError('refreshToken이 만료되었습니다.', {
            response,
            request,
            config: requestConfig,
          });

        try {
          const newAccessToken = await renewAccessToken(baseURL, refreshToken);

          headers.set('Authorization', `Bearer ${newAccessToken}`);

          const retryRequest = new Request(url, {
            ...requestConfig,
            headers,
          });

          const retryResponse = await executeRequest<T>(retryRequest);

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
