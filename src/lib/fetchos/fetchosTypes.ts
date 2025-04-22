export interface FetchosRequestConfig extends RequestInit {
  baseURL?: string;
  isAuthorized?: boolean;
  timeout?: number;
  headers?: HeadersInit;
}

export interface FetchosResponse<T = unknown> extends Response {
  data: T;
}

export interface FetchosInstance {
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

export interface FetchosStatic {
  create(config?: FetchosRequestConfig): FetchosInstance;
}
