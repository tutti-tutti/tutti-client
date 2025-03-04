export const SERVER_API_BASE_URL = process.env.SERVER_API_BASE_URL;
export const SERVER_API_VERSION_V1 = process.env.SERVER_API_VERSION_V1;
export const API_ROUTE_BASE_URL = process.env.API_ROUTE_BASE_URL;

export const USERS_ENDPOINTS = {
  LIST: `${SERVER_API_BASE_URL}${SERVER_API_VERSION_V1}/users`,
};
