import { ProductThumbnail } from '@/components';

const tempFetchOrder = async (orderId: string, productItemId: string) => {
  const tempData = {
    orderNumber: 'string',
    orderStatus: 'string',
    totalDiscountAmount: 0,
    totalProductAmount: 0,
    deliveryFee: 0,
    totalAmount: 0,
    paymentType: 'CARD',
    orderedAt: '2025-03-25T07:20:41.050Z',
    paidAt: '2025-03-25T07:20:41.050Z',
    expectedArrivalAt: '2025-03-25T07:20:41.050Z',
    completedAt: '2025-03-25T07:20:41.050Z',
    orderItems: [
      {
        storeId: 0,
        storeName: 'string',
        productItemId: 0,
        productName: 'string',
        productImgUrl:
          'https://ae-pic-a1.aliexpress-media.com/kf/Ad36bb01de72146b4a6f6f1748402bb1fY.jpg_960x960q75.jpg_.avif',
        firstOptionName: 'string',
        firstOptionValue: 'string',
        secondOptionName: 'string',
        secondOptionValue: 'string',
        quantity: 0,
        price: 0,
      },
      {
        storeId: 0,
        storeName: 'string',
        productItemId: 1,
        productName: 'string',
        productImgUrl:
          'https://ae-pic-a1.aliexpress-media.com/kf/Ad36bb01de72146b4a6f6f1748402bb1fY.jpg_960x960q75.jpg_.avif',
        firstOptionName: 'string',
        firstOptionValue: 'string',
        secondOptionName: 'string',
        secondOptionValue: 'string',
        quantity: 0,
        price: 0,
      },
      {
        storeId: 0,
        storeName: 'string',
        productItemId: 2,
        productName: 'string',
        productImgUrl:
          'https://ae-pic-a1.aliexpress-media.com/kf/Ad36bb01de72146b4a6f6f1748402bb1fY.jpg_960x960q75.jpg_.avif',
        firstOptionName: 'string',
        firstOptionValue: 'string',
        secondOptionName: 'string',
        secondOptionValue: 'string',
        quantity: 0,
        price: 0,
      },
    ],
    recipientName: 'string',
    recipientPhone: 'string',
    recipientAddress: 'string',
    zipCode: 'string',
    note: 'string',
  };

  const productItemData = tempData.orderItems.find(
    item => item.productItemId === Number(productItemId),
  );

  return productItemData;
};

interface ReviewProductInfoProps {
  orderId: string;
  productItemId: string;
}

const ReviewProductInfo = async ({
  orderId,
  productItemId,
}: ReviewProductInfoProps) => {
  const orderData = await tempFetchOrder(orderId, productItemId);

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
        <div className="font-style-paragraph text-text-tertiary mb-md">{`${orderData?.firstOptionName} ${orderData?.secondOptionName}`}</div>
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
