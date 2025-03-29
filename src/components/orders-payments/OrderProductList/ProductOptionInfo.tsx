import { cn } from '@/utils';

interface ProductOptionInfoProps {
  firstOptionValue: string | null;
  secondOptionValue: string | null;
  className?: string;
}

const ProductOptionInfo = ({
  firstOptionValue,
  secondOptionValue,
  className,
}: ProductOptionInfoProps) => {
  return (
    <div
      className={cn(
        'gap-sm text-text-tertiary flex text-sm font-normal md:text-base',
        className,
      )}
    >
      <span>{firstOptionValue}</span>
      {secondOptionValue ? (
        <>
          <i>·</i>
          <span>{secondOptionValue}</span>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default ProductOptionInfo;
