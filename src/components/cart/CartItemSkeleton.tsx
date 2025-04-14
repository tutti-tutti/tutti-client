const CartItemSkeleton = () => {
  return (
    <div className="py-lg md:py-2xl border-border-secondary gap-sm flex w-full animate-pulse border-t">
      <div className="relative w-1/2 md:w-2/5">
        <div className="aspect-square w-full rounded bg-gray-200" />
      </div>

      <div className="flex w-1/2 flex-col md:w-3/5">
        <div className="flex justify-end">
          <div className="h-5 w-5 rounded-full bg-gray-200" />
        </div>

        <div className="gap-xs flex flex-col">
          <div className="mb-2xs h-5 w-24 rounded bg-gray-200" />
          <div className="mb-xs md:mb-sm h-6 w-full rounded bg-gray-200" />
        </div>

        <div className="mb-sm">
          <div className="h-4 w-16 rounded bg-gray-200" />
        </div>

        <div className="gap-2xs mb-4 flex items-center">
          <div className="h-6 w-32 rounded bg-gray-200" />
        </div>

        <div className="mt-auto flex h-full flex-col">
          <div className="mt-auto flex items-center justify-start md:justify-end">
            <div className="h-10 w-52 rounded bg-gray-200" />
          </div>
          <div className="mt-1 h-4 w-40 self-start rounded bg-gray-200 md:self-end" />
        </div>
      </div>
    </div>
  );
};

export default CartItemSkeleton;
