import { NextResponse } from 'next/server';

import { fetchMemberData } from '@/services';

export const GET = async () => {
  try {
    const products = await fetchMemberData();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 },
    );
  }
};
