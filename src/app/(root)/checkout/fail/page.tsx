import Link from 'next/link';
interface PaymentFailPageProps {
  searchParams: Promise<{
    code: string;
    message: string;
  }>;
}

const PaymentFailPage = async ({ searchParams }: PaymentFailPageProps) => {
  const { code: errorCode, message: errorMessage } = await searchParams;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-bold">결제에 실패했습니다</h1>
      {errorCode && <p className="mb-2">오류 코드: {errorCode}</p>}
      {errorMessage && <p className="mb-4">오류 메시지: {errorMessage}</p>}

      <Link href="/" className="text-text-primary hover:underline">
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default PaymentFailPage;
