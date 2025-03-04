import { USERS_ENDPOINTS } from '@/constants';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(USERS_ENDPOINTS.LIST, () => {
    return HttpResponse.json([
      { user_id: 1, name: 'goldegg127' },
      { user_id: 2, name: 'bbjbc' },
      { user_id: 3, name: 'vgotu99' },
    ]);
  }),
];
