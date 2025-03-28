import { cn } from '@/utils';

const Divider = ({ className }: { className?: string }) => {
  return <hr className={cn('bg-bg-disabled h-[1px] border-0', className)} />;
};

export default Divider;
