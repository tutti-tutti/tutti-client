import { type NextRequest, NextResponse } from 'next/server';

export const externalRequestRestrictionMiddleware = async (
  request: NextRequest,
) => {
  const referer = request.headers.get('referer');
  const pathname = request.nextUrl.pathname;

  const allowedDomains = ['http://localhost:3000/', 'https://www.tutti.today'];

  const isAllowedReferer =
    referer && allowedDomains.some(domain => referer.startsWith(domain));

  if (pathname.startsWith('/api') && referer && !isAllowedReferer) {
    return NextResponse.json(
      { error: '외부 요청은 허용되지 않습니다.' },
      { status: 403 },
    );
  }

  return NextResponse.next();
};
