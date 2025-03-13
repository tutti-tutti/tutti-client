import { AUTH_ENDPOINTS } from '@/constants';
import { AUTH_REQUEST } from '@/mocks';
import { getMswEndpoint } from '@/utils';
import { http, HttpResponse } from 'msw';

export const authHandlers = [
  http.post(
    getMswEndpoint(AUTH_ENDPOINTS.EMAIL_VERIFY),
    async ({ request }) => {
      const { email } = (await request.json()) as { email: string };

      if (!email) {
        return HttpResponse.json(AUTH_REQUEST.EMAIL_VERIFY.ERROR, {
          status: 400,
        });
      }

      return HttpResponse.json(AUTH_REQUEST.EMAIL_VERIFY.SUCCESS, {
        status: 200,
      });
    },
  ),

  http.post(
    getMswEndpoint(AUTH_ENDPOINTS.EMAIL_CONFIRM),
    async ({ request }) => {
      const { verification_code } = (await request.json()) as {
        verification_code: string;
      };

      if (verification_code !== '000000') {
        return HttpResponse.json(AUTH_REQUEST.EMAIL_CONFIRM.ERROR, {
          status: 400,
        });
      }

      return HttpResponse.json(AUTH_REQUEST.EMAIL_CONFIRM.SUCCESS, {
        status: 200,
      });
    },
  ),
];
