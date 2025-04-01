import { cn } from '@/utils';
import { Button } from '@/components';

interface OrdersActionsProps {
  className?: string;
}

const OrdersActions = ({ className }: OrdersActionsProps) => {
  const buttonStyles = 'h-[40px] md:h-[60px] w-full md:w-[147px]';

  return (
    <article
      className={cn(
        'gap-xs md:gap-md flex md:basis-[147px] md:flex-col',
        className,
      )}
    >
      <Button type="button" variant="primaryOutline" className={buttonStyles}>
        배송조회
      </Button>
      <Button type="button" variant="tertiaryOutline" className={buttonStyles}>
        주문취소
      </Button>
    </article>
  );
};

export default OrdersActions;
