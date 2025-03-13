import { AUTH_ENDPOINTS } from '@/constants';
import { EMAIL } from '@/mocks/auth';
import { getMswEndpoint } from '@/utils';
import { http, HttpResponse } from 'msw';

export const authHandlers = [
  http.post(getMswEndpoint(AUTH_ENDPOINTS.VERIFY), async ({ request }) => {
    const { email } = (await request.json()) as { email: string };

    if (!email) {
      return HttpResponse.json(EMAIL.VERIFY.ERROR, { status: 400 });
    }

    return HttpResponse.json(EMAIL.VERIFY.SUCCESS, { status: 200 });
  }),
];
