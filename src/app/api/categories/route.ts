import { NextResponse } from 'next/server';

import { fetchCategories } from '@/services';

export const GET = async () => {
  try {
    const categories = await fetchCategories();
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 },
    );
  }
};
