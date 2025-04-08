import { ROUTER_PATH } from '@/constants';
import { type NextRequest, NextResponse } from 'next/server';

export const authMiddleware = async (request: NextRequest) => {
  const accessToken = request.cookies.get('access_token')?.value;
  const pathname = request.nextUrl.pathname;

  if (
    accessToken &&
    [ROUTER_PATH.LOGIN, ROUTER_PATH.SIGNUP, ROUTER_PATH.RESET_PW].includes(
      pathname,
    )
  )
    return NextResponse.redirect(
      new URL(ROUTER_PATH.ERROR_AUTHORIZED, request.url),
    );

  if (!accessToken && pathname.startsWith('/my'))
    return NextResponse.redirect(
      new URL(ROUTER_PATH.ERROR_UNAUTHORIZED, request.url),
    );

  return NextResponse.next();
};
