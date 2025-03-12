import { NextResponse } from 'next/server';

import { fetchProducts } from '@/services';

export const GET = async () => {
  try {
    const products = await fetchProducts();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 },
    );
  }
};
