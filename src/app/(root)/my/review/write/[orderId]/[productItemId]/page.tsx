import { ReviewContent, ReviewProductInfo } from '@/components';

type CreateReviewPageParams = {
  params: {
    orderId: string;
    productItemId: string;
  };
};

const CreateReviewPage = async ({ params }: CreateReviewPageParams) => {
  const { orderId, productItemId } = await params;

  return (
    <div className="flex h-dvh justify-center">
      <div className="flex w-3xl flex-col items-center">
        <h1 className="font-style-title mb-5xl">리뷰 작성</h1>
        <ReviewProductInfo orderId={orderId} productItemId={productItemId} />
        <ReviewContent orderId={orderId} productItemId={productItemId} />
      </div>
    </div>
  );
};

export default CreateReviewPage;
