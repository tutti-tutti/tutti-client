import { type NextRequest, NextResponse } from 'next/server';

export const directAccessRestrictionMiddleware = async (
  request: NextRequest,
) => {
  const referer = request.headers.get('referer');
  const pathname = request.nextUrl.pathname;

  if (pathname === '/error/restricted') return NextResponse.next();

  const allowedDomains = ['http://localhost:3000/', 'https://www.tutti.today'];

  const isAllowedReferer =
    referer && allowedDomains.some(domain => referer.startsWith(domain));

  if (
    (pathname.startsWith('/api') ||
      pathname.startsWith('/checkout') ||
      pathname.startsWith('/error')) &&
    (!referer || isAllowedReferer)
  ) {
    return NextResponse.redirect(new URL('/error/restricted', request.url));
  }

  return NextResponse.next();
};
