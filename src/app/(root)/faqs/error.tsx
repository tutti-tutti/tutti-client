'use client';

import { useRouter } from 'next/navigation';

import { Button, Input } from '@/components';
import { faqSearchAction } from '@/server-actions';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const router = useRouter();
  const isInvalidCategory = error.message.includes('카테고리');

  const handleGoBack = () => {
    router.back();
    reset();
  };

  if (isInvalidCategory) {
    return (
      <div className="md:px-7xl gap-lg mb-7xl flex flex-col items-center">
        <h1 className="font-style-title mb-3xl">자주 묻는 질문</h1>
        <div className="font-style-subHeading mb-2xl">잘못된 접근입니다.</div>
        <Button onClick={handleGoBack}>돌아가기</Button>
      </div>
    );
  }

  return (
    <div className="md:px-7xl gap-lg mb-7xl flex flex-col items-center">
      <h1 className="font-style-title mb-3xl">자주 묻는 질문</h1>
      <form action={faqSearchAction}>
        <Input
          name="faqQuery"
          icon="search"
          className="!py-md !px-2xl border-border-info w-[670px] rounded-lg border-2"
          placeholder="자주 묻는 질문을 입력해주세요"
        />
      </form>
      <div className="font-style-subHeading">검색 결과가 없습니다.</div>
    </div>
  );
}
