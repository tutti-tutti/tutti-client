import { cn } from '@/utils';

interface ProductNameProps {
  productName: string;
  className?: string;
}

const ProductName = ({ productName, className }: ProductNameProps) => {
  return (
    <h3
      className={cn(
        'font-style-subHeading ellipsis-row-2 leading-[1.6] font-normal break-all md:break-keep',
        className,
      )}
    >
      {productName}
    </h3>
  );
};

export default ProductName;
