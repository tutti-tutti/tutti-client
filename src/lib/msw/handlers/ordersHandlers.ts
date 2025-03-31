import { http, HttpResponse } from 'msw';

import { getMswEndpoint } from '@/utils';
import { orderHistoryList } from '@/mocks';
import { ORDERS_ENDPOINTS } from '@/constants';

export const orderHistoryHandlers = [
  http.get(getMswEndpoint(ORDERS_ENDPOINTS.LIST), () => {
    return HttpResponse.json(orderHistoryList);
  }),
];
