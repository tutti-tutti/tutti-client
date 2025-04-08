import { type NextRequest, NextResponse } from 'next/server';
import { ERROR_MESSAGES, ROUTER_PATH } from '@/constants';

const ALLOWED_DOMAINS = ['http://localhost:3000/', 'https://www.tutti.today'];

const {
  ERROR_AUTHORIZED,
  ERROR_RESTRICTED,
  ERROR_UNAUTHORIZED,
  LOGIN,
  SIGNUP,
  RESET_PW,
} = ROUTER_PATH;

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const referer = request.headers.get('referer');
  const accessToken = request.cookies.get('access_token')?.value;

  if (pathname === ERROR_RESTRICTED) return NextResponse.next();

  const isRestrictionPath =
    pathname.startsWith('/api') ||
    pathname.startsWith('/checkout') ||
    pathname.startsWith('/error') ||
    pathname.startsWith('/my/review/write');

  if (isRestrictionPath) {
    const isAllowedReferer =
      referer && ALLOWED_DOMAINS.some(domain => referer.startsWith(domain));

    const isExternalRequest =
      pathname.startsWith('/api') && referer && !isAllowedReferer;
    const isDirectAccess = !referer || !isAllowedReferer;

    if (isExternalRequest) {
      return NextResponse.json(
        { error: ERROR_MESSAGES.RESTRICT_EXTERNAL_REQUEST },
        { status: 403 },
      );
    }

    if (isDirectAccess) {
      return NextResponse.redirect(new URL(ERROR_RESTRICTED, request.url));
    }
  }

  if (accessToken) {
    if ([LOGIN, SIGNUP, RESET_PW].includes(pathname)) {
      return NextResponse.redirect(new URL(ERROR_AUTHORIZED, request.url));
    }
  } else if (pathname.startsWith('/my')) {
    return NextResponse.redirect(new URL(ERROR_UNAUTHORIZED, request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/signin',
    '/signup',
    '/reset-password',
    '/my/:path*',
    '/api/:path*',
    '/checkout/:path*',
    '/error/:path*',
  ],
};
