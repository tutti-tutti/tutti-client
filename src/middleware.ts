import { type NextRequest, NextResponse } from 'next/server';

import { BASE_URL, ERROR_MESSAGES, MIDDLE_PATH, PATH_ERROR } from '@/constants';
import { pagePath } from '@/navigator';

const { signin, signup, resetPw } = pagePath;
const { ERROR_AUTHORIZED, ERROR_RESTRICTED, ERROR_UNAUTHORIZED } = PATH_ERROR;
const { CHECKOUT, ERROR, REVIEW, MY } = MIDDLE_PATH;

const ALLOWED_DOMAINS = [BASE_URL.LOCAL, BASE_URL.SITE];
const RESTRICTED_PATHS = ['/api', CHECKOUT, ERROR, `${REVIEW}/write`];
const ALLOWED_PATHNAME = '/api/auth';
const RESTRICTED_PATHNAME = '/api';
const REFERER = 'referer';
const ACCESS_TOKEN = 'access_token';

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const referer = request.headers.get(REFERER);
  const accessToken = request.cookies.get(ACCESS_TOKEN)?.value;

  if (pathname.startsWith(ALLOWED_PATHNAME)) return NextResponse.next();

  if (pathname === ERROR_RESTRICTED) return NextResponse.next();

  const isRestrictionPath = RESTRICTED_PATHS.some(path =>
    pathname.startsWith(path),
  );

  if (isRestrictionPath) {
    const isAllowedReferer =
      referer && ALLOWED_DOMAINS.some(domain => referer.startsWith(domain));

    const isExternalRequest =
      pathname.startsWith(RESTRICTED_PATHNAME) && referer && !isAllowedReferer;
    const isDirectAccess = !referer || !isAllowedReferer;

    if (isExternalRequest)
      return NextResponse.json(
        { error: ERROR_MESSAGES.RESTRICT_EXTERNAL_REQUEST },
        { status: 403 },
      );

    if (isDirectAccess)
      return NextResponse.redirect(new URL(ERROR_RESTRICTED, request.url));
  }

  if (accessToken) {
    if ([signin, signup, resetPw].includes(pathname))
      return NextResponse.redirect(new URL(ERROR_AUTHORIZED, request.url));
  } else if (pathname.startsWith(MY))
    return NextResponse.redirect(new URL(ERROR_UNAUTHORIZED, request.url));

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/signin',
    '/signup',
    '/reset-password',
    '/my/:path*',
    '/api/:path*',
    '/checkout',
    '/error/:path*',
  ],
};
