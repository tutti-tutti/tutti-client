import Image, { StaticImageData } from 'next/image';

import { cn } from '@/utils';
import ProductThumbnailAction from './ProductThumbnailAction';

interface ProductThumbnailProps {
  imageUrl: string | StaticImageData;
  name: string;
  height?: string;
  width: string;
  onClick?: () => void;
  className?: string;
  isDim?: boolean;
}

const ProductThumbnail = ({
  imageUrl,
  name,
  height,
  width,
  onClick,
  className,
  isDim = false,
}: ProductThumbnailProps) => {
  return (
    <figure
      className={cn(
        'group relative w-full cursor-pointer overflow-hidden rounded-lg',
        height,
        width,
        className,
      )}
      onClick={onClick}
    >
      <Image
        src={imageUrl}
        alt={name}
        fill
        priority
        sizes="(max-width: 640px) 100vw, 640px"
        className="object-cover"
      />
      {isDim && (
        <div className="absolute inset-0 bg-black/35 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100">
          <ProductThumbnailAction />
        </div>
      )}
    </figure>
  );
};

export default ProductThumbnail;
