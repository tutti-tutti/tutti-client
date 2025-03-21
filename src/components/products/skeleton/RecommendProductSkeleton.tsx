import RecommendCarousel from '../RecommendCarousel';

export const RecommendProductItemSkeleton = () => {
  return (
    <li className="px-xs animate-pulse">
      <div className="h-[170px] w-full rounded bg-gray-200 sm:h-[240px]" />
      <div className="mt-xs mb-sm h-4 w-full rounded bg-gray-200" />
      <div className="mb-2 h-4 w-3/4 rounded bg-gray-200" />
      <div className="h-5 w-1/2 rounded bg-gray-200" />
    </li>
  );
};

export const RecommendProductListSkeleton = () => {
  return (
    <div className="gap-3xl py-xl pb-xs border-border-secondary flex flex-col border-b">
      <div className="mx-auto h-8 w-2/5 animate-pulse rounded bg-gray-200" />
      <RecommendCarousel />
    </div>
  );
};
