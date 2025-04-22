export class FetchosError extends Error {
  response?: {
    data?: {
      message?: string;
      error?: string;
      [key: string]: unknown;
    };
    status: number;
    statusText: string;
    headers: Headers;
  };
  request?: Request;
  config?: RequestInit;

  constructor(
    message: string,
    options: {
      response?: Response;
      request?: Request;
      data?: {
        [key: string]: unknown;
        message?: string | undefined;
        error?: string | undefined;
      };
      config?: RequestInit;
    } = {},
  ) {
    super(message);
    this.name = 'FetchosError';

    if (options.response) {
      this.response = {
        status: options.response.status,
        statusText: options.response.statusText,
        headers: options.response.headers,
        data: options.data,
      };
    }

    this.request = options.request;
    this.config = options.config;
  }
}
