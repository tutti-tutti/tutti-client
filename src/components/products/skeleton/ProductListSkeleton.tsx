const ProductItemSkeleton = () => {
  return (
    <li className="py-lg md:py-7xl animate-pulse">
      <div className="mb-xs aspect-square w-full rounded-md bg-gray-200" />

      <div className="my-xs h-4 w-1/3 rounded-sm bg-gray-200" />

      <div className="mb-xs h-8 w-full rounded-sm bg-gray-200" />

      <div className="gap-xs mb-xs flex items-center">
        <div className="h-5 w-16 rounded-sm bg-gray-200" />
        <div className="h-5 w-16 rounded-sm bg-gray-200" />
      </div>

      <div className="mb-1 h-3 w-1/4 rounded-sm bg-gray-200" />

      <div className="gap-2xs flex items-center">
        <div className="h-9 w-12 rounded-sm bg-gray-200" />
        <div className="h-9 w-28 rounded-sm bg-gray-200" />
      </div>
    </li>
  );
};

const ProductListSkeleton = () => {
  return (
    <ul className="gap-x-md gap-y-6xl grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {Array(9)
        .fill(0)
        .map((_, index) => (
          <ProductItemSkeleton key={index} />
        ))}
    </ul>
  );
};

export default ProductListSkeleton;
