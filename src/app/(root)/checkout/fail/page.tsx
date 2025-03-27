import Link from 'next/link';

export default function PaymentFailPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const errorCode = searchParams.code as string;
  const errorMessage = searchParams.message as string;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-bold">결제에 실패했습니다</h1>
      {errorCode && <p className="mb-2">오류 코드: {errorCode}</p>}
      {errorMessage && <p className="mb-4">오류 메시지: {errorMessage}</p>}

      <Link href="/" className="text-blue-500 hover:underline">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
