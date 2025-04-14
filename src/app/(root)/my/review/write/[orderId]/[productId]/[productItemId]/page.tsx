import { REVIEW_CONSTANTS } from '@/constants';
import { ReviewContent, ReviewProductInfo } from '@/components';
import type { CreateReviewParams } from '@/types';

type CreateReviewPageParams = {
  params: Promise<CreateReviewParams>;
};

const CreateReviewPage = async ({ params }: CreateReviewPageParams) => {
  const awaitedParams = await params;

  return (
    <div className="mb-7xl flex justify-center">
      <div className="flex w-3xl flex-col items-center">
        <h1 className="font-style-title mb-5xl">
          {REVIEW_CONSTANTS.CREATE.LABEL}
        </h1>

        <ReviewProductInfo awaitedParams={awaitedParams} />
        <ReviewContent awaitedParams={awaitedParams} />
      </div>
    </div>
  );
};

export default CreateReviewPage;
