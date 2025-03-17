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

  http.post(
    getMswEndpoint(AUTH_ENDPOINTS.SIGNUP_EMAIL),
    async ({ request }) => {
      const { email, password, password_confirm, essential_policy } =
        (await request.json()) as {
          email: string;
          password: string;
          password_confirm: string;
          essential_policy: string[];
          optional_policy: string[];
        };
      if (
        !email ||
        !password ||
        !password_confirm ||
        essential_policy.length === 0
      ) {
        return HttpResponse.json(AUTH_REQUEST.SIGNUP_EMAIL.ERROR, {
          status: 400,
        });
      }

      return HttpResponse.json(AUTH_REQUEST.SIGNUP_EMAIL.SUCCESS, {
        status: 201,
      });
    },
  ),
];
