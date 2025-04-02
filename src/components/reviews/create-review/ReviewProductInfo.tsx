import { ProductThumbnail } from '@/components';
import { fetchProductItemDataForReview } from '@/services';

interface ReviewProductInfoProps {
  orderId: string;
  productItemId: string;
}

const ReviewProductInfo = async ({
  orderId,
  productItemId,
}: ReviewProductInfoProps) => {
  const orderData = await fetchProductItemDataForReview(orderId, productItemId);

  return (
    <div className="gap-lg flex w-full">
      <ProductThumbnail
        imageUrl={orderData?.productImgUrl || ''}
        name={orderData?.productName || ''}
        width="w-2xs"
        height="h-auto"
        className="aspect-square cursor-default rounded-2xl"
      />
      <div className="flex-auto">
        <div className="font-style-paragraph text-text-secondary mb-sm">
          {orderData?.storeName}
        </div>
        <div className="font-style-subHeading text-text-primary mb-2xs">
          {orderData?.productName}
        </div>
        {orderData?.firstOptionValue && (
          <div className="font-style-paragraph text-text-tertiary mb-md">{`${orderData?.firstOptionValue}${orderData?.secondOptionValue ? `, ${orderData.secondOptionValue}` : ''}`}</div>
        )}
        <div className="font-style-paragraph text-text-secondary mb-sm">
          {orderData?.quantity}개
        </div>
        <div className="font-style-paragraph text-text-secondary">
          {orderData?.price}원
        </div>
      </div>
    </div>
  );
};

export default ReviewProductInfo;
