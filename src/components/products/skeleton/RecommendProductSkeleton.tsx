const RecommendProductItemSkeleton = () => {
  return (
    <li className="px-xs animate-pulse">
      <div className="h-[170px] w-full rounded bg-gray-200 sm:h-[200px]" />
      <div className="mt-xs mb-sm h-4 w-full rounded bg-gray-200" />
      <div className="mb-2 h-4 w-3/4 rounded bg-gray-200" />
      <div className="h-5 w-1/2 rounded bg-gray-200" />
    </li>
  );
};

export default RecommendProductItemSkeleton;
