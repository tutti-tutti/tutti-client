import Link from 'next/link';

import { Button, Icon } from '@/components';
import type { ProductReviewInfo } from '@/types';

interface ProductHeaderProps {
  storeName: string;
  name: string;
  freeDelivery?: boolean;
  almostOutOfStock?: boolean;
  likes: number;
  productReviewInfo: ProductReviewInfo;
}

const ProductHeader = ({
  storeName,
  name,
  freeDelivery,
  almostOutOfStock,
  likes,
  productReviewInfo,
}: ProductHeaderProps) => {
  const handleProductReviewInfoClick = (
    e: React.MouseEvent<HTMLDivElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="md:border-border-secondary">
      <Link href="#" className="text-text-secondary font-style-subHeading">
        {storeName}
      </Link>

      <h1 className="mb-sm font-style-heading">{name}</h1>

      <div className="flex justify-between">
        <section>
          <div className="mb-md flex gap-2">
            {freeDelivery && (
              <div className="bg-bg-successSubtle px-xs rounded-sm">
                <p className="text-text-success font-style-subHeading">
                  무료배송
                </p>
              </div>
            )}

            {almostOutOfStock && (
              <div className="bg-bg-infoSubtle px-xs rounded-sm">
                <p className="text-text-info font-style-subHeading">품절임박</p>
              </div>
            )}
          </div>
          <div
            className="font-style-paragraph group flex cursor-pointer items-center"
            onClick={e => handleProductReviewInfoClick(e, 'product-review')}
          >
            <Icon iconName="starFill" />
            <div className="text-text-primary group-hover:text-text-selected">
              {productReviewInfo.avg}
            </div>
            <div className="text-text-secondary group-hover:text-text-selected ml-1">
              ({productReviewInfo.totalCount})
            </div>
          </div>
        </section>

        <section className="flex items-end">
          <div className="flex justify-start md:justify-end">
            <Button
              icon="heartFill"
              className="!py-sm !gap-2xs text-icon-visited rounded-full"
              variant="likeOff"
            >
              {likes}
            </Button>
          </div>
        </section>
      </div>
    </header>
  );
};

export default ProductHeader;
