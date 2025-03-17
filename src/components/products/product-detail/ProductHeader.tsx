import Link from 'next/link';

import { Button } from '@/components';

interface ProductHeaderProps {
  storeName: string;
  name: string;
  freeDelivery?: boolean;
  almostOutOfStock?: boolean;
  likes: number;
}

const ProductHeader = ({
  storeName,
  name,
  freeDelivery,
  almostOutOfStock,
  likes,
}: ProductHeaderProps) => {
  return (
    <header className="md:border-border-secondary pb-lg md:border-b">
      <Link href="#" className="text-text-secondary font-style-subHeading">
        {storeName}
      </Link>

      <h1 className="mb-sm font-style-heading">{name}</h1>

      <div className="mb-md flex gap-2">
        {freeDelivery && (
          <div className="bg-bg-successSubtle px-xs rounded-sm">
            <p className="text-text-success font-style-subHeading">무료배송</p>
          </div>
        )}

        {almostOutOfStock && (
          <div className="bg-bg-infoSubtle px-xs rounded-sm">
            <p className="text-text-info font-style-subHeading">품절임박</p>
          </div>
        )}
      </div>

      <div className="flex justify-start md:justify-end">
        <Button
          icon="heartFill"
          className="!py-sm !gap-2xs text-icon-visited rounded-full"
          variant="likeOff"
        >
          {likes}
        </Button>
      </div>
    </header>
  );
};

export default ProductHeader;
