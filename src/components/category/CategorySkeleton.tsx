const CategorySkeleton = () => {
  return (
    <div className="gap-xl flex flex-col items-center justify-center">
      <div className="h-10 w-40 animate-pulse rounded-lg bg-gray-200 md:h-12 md:w-52"></div>

      <div className="gap-md md:gap-6xl grid w-full animate-pulse grid-cols-3 md:flex md:items-center md:justify-center">
        {Array.from({ length: 5 }, (_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-200"></div>
            <div className="mt-2 h-6 w-16 rounded bg-gray-200"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySkeleton;
