const calculateDiscountRate = (originalPrice: number, sellingPrice: number) => {
  if (originalPrice <= sellingPrice) {
    return null;
  }

  const discountRate = Math.floor(
    ((originalPrice - sellingPrice) / originalPrice) * 100,
  );

  return `${discountRate}%`;
};

export { calculateDiscountRate };
