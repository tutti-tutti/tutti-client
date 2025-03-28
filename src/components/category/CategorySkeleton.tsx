const CategorySkeleton = () => {
  return (
    <div className="gap-xl flex flex-col">
      <h3 className="text-text-primary font-style-heading text-center">
        지혜 쇼핑몰 카테고리
      </h3>
      <div className="gap-6xl flex animate-pulse items-center justify-center">
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
