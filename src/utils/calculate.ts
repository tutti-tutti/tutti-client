const calculateDiscountRate = (originalPrice: number, sellingPrice: number) => {
  const discountRate = Math.floor(
    ((originalPrice - sellingPrice) / originalPrice) * 100,
  );

  return `${discountRate}%`;
};

export { calculateDiscountRate };
