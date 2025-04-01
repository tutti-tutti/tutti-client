import Link from 'next/link';

import { ROUTER_PATH } from '@/constants';

export default function NotFound() {
  return (
    <div>
      <h2>유효하지 않은 정보입니다.</h2>
      <p>장바구니에서 다시 시도해주세요.</p>
      <Link href={ROUTER_PATH.CART}>Return Home</Link>
    </div>
  );
}
