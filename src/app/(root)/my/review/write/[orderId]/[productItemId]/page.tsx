import { REVIEW_CONSTANTS } from '@/constants';
import { ReviewContent, ReviewProductInfo } from '@/components';

type CreateReviewPageParams = {
  params: Promise<{
    orderId: string;
    productItemId: string;
  }>;
};

const CreateReviewPage = async ({ params }: CreateReviewPageParams) => {
  const { orderId, productItemId } = await params;

  return (
    <div className="mb-7xl flex justify-center">
      <div className="flex w-3xl flex-col items-center">
        <h1 className="font-style-title mb-5xl">
          {REVIEW_CONSTANTS.CREATE.LABEL}
        </h1>

        <ReviewProductInfo orderId={orderId} productItemId={productItemId} />
        <ReviewContent orderId={orderId} productItemId={productItemId} />
      </div>
    </div>
  );
};

export default CreateReviewPage;
