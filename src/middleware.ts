import { type NextRequest, NextResponse } from 'next/server';
import {
  authMiddleware,
  directAccessRestrictionMiddleware,
  externalRequestRestrictionMiddleware,
} from '@/middlewares';
import { ROUTER_PATH } from '@/constants';

export const middleware = async (request: NextRequest) => {
  const directAccessRestrictionResponse =
    await directAccessRestrictionMiddleware(request);
  if (directAccessRestrictionResponse?.status !== 200)
    return directAccessRestrictionResponse;

  const authResponse = await authMiddleware(request);
  if (authResponse?.status !== 200) return authResponse;

  const externalRequestRestrictionResponse =
    await externalRequestRestrictionMiddleware(request);
  if (externalRequestRestrictionResponse.status !== 200)
    return externalRequestRestrictionResponse;

  return NextResponse.next();
};

export const config = {
  matcher: [
    ROUTER_PATH.LOGIN,
    ROUTER_PATH.SIGNUP,
    ROUTER_PATH.RESET_PW,
    '/my/:path*',
    '/api/:path*',
    '/checkout/:path*',
    '/error/:path*',
  ],
};
