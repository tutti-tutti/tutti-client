import Link from 'next/link';

import { Button, Icon } from '@/components';
import { ROUTER_PATH } from '@/constants';

export default function NotFound() {
  return (
    <div className="gap-lg md:gap-7xl flex min-h-screen flex-col items-center justify-center md:flex-row">
      <Icon
        iconName="notFound"
        className="h-[228px] w-[228px] md:h-[346px] md:w-[346px]"
      />

      <div className="flex flex-col">
        <h1 className="font-style-title text-text-primary md:mb-xs mb-0">
          앗 페이지를 찾지 못했습니다 :(
        </h1>
        <span className="text-text-tertiaryInfo font-style-heading mb-sm md:mb-lg">
          404 page not found
        </span>

        <div className="text-text-tertiaryInfo font-style-paragraph mb-sm md:mb-lg">
          <p>현재 고객님이 접속하려는 페이지가 존재하지 않습니다!</p>
          <p>뒤로가기 버튼을 누르거나 아래 버튼을 눌러 홈페이지로</p>
          <p>돌아가시기 바랍니다!</p>
        </div>

        <Button className="w-auto md:w-fit">
          <Link href={ROUTER_PATH.HOME}>메인페이지로 돌아가기</Link>
        </Button>
      </div>
    </div>
  );
}
